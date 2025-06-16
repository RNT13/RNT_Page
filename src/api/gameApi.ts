import { Deal } from '../types/cheapSharkType'
import { Game } from '../types/gameType'
import { RawgGame } from '../types/rawgGameType'
import { apiSlice } from './apiSlice'

const API_KEY = import.meta.env.VITE_RAWG_API_KEY

export const gameApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFullGameDetails: builder.query<Game, string>({
      async queryFn(gameId, _queryApi, _extraOptions, fetchWithBQ) {
        const rawgRes = await fetchWithBQ(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        if (rawgRes.error) return { error: rawgRes.error }

        const rawgData = rawgRes.data as RawgGame

        const cheapRes = await fetchWithBQ(`https://www.cheapshark.com/api/1.0/deals?title=${encodeURIComponent(rawgData.name)}`)
        const cheapData = cheapRes.data as Deal[]
        const deal = cheapData?.[0]

        const game: Game = {
          id: rawgData.id,
          name: rawgData.name,
          description: rawgData.description_raw || rawgData.description || '',
          release_date: rawgData.released,
          media: {
            thumbnail: rawgData.background_image,
            cover: rawgData.background_image_additional || rawgData.background_image,
            gallery: rawgData.short_screenshots?.map(s => ({ type: 'image', url: s.image })) || []
          },
          details: {
            system: rawgData.platforms?.[0]?.platform?.name || 'Desconhecido',
            category: rawgData.genres?.[0]?.name || 'Indefinido',
            developer: rawgData.developers?.[0]?.name || 'N/A',
            publisher: rawgData.publishers?.[0]?.name || 'N/A',
            language: ['Inglês']
          },
          prices: {
            discount: deal ? Math.round(Number(deal.savings)) : 0,
            original: deal ? parseFloat(deal.normalPrice) : 0,
            current: deal ? parseFloat(deal.salePrice) : 0
          }
        }

        return { data: game }
      }
    }),

    getUnifiedGames: builder.query<Game[], void>({
      async queryFn(_, _api, _opts, fetchWithBQ) {
        const res = await fetchWithBQ(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
        if (res.error) return { error: res.error }

        const rawgGames = (res.data as { results: RawgGame[] }).results

        const games: Game[] = await Promise.all(
          rawgGames.map(async rawg => {
            const cheapRes = await fetchWithBQ(`https://www.cheapshark.com/api/1.0/deals?title=${encodeURIComponent(rawg.name)}&sortBy=price`)
            const deal = (cheapRes.data as Deal[])[0]

            return {
              id: rawg.id,
              name: rawg.name,
              description: rawg.description_raw || 'Sem descrição.',
              release_date: rawg.released,
              media: {
                thumbnail: rawg.background_image,
                cover: rawg.background_image_additional || rawg.background_image,
                gallery: []
              },
              details: {
                system: rawg.platforms?.[0]?.platform?.name || 'Desconhecido',
                category: rawg.genres?.[0]?.name || 'Indefinido',
                developer: rawg.developers?.[0]?.name || 'N/A',
                publisher: rawg.publishers?.[0]?.name || 'N/A',
                language: ['Inglês']
              },
              prices: {
                discount: deal ? parseFloat(deal.savings) : 0,
                original: deal ? parseFloat(deal.normalPrice) : 0,
                current: deal ? parseFloat(deal.salePrice) : 0
              }
            } as Game
          })
        )

        return { data: games }
      },
      providesTags: ['Game']
    })
  })
})

export const { useGetUnifiedGamesQuery, useGetFullGameDetailsQuery } = gameApi
