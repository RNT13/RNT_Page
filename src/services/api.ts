import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../utils/GameApi'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: builder => ({
    getFeaturedGames: builder.query<Game, void>({
      query: () => '/destaque'
    }),
    getOnSale: builder.query<Game, void>({
      query: () => '/promocoes'
    }),
    getComingSoon: builder.query<Game, void>({
      query: () => '/em-breve'
    }),
    getActionGames: builder.query<Game, void>({
      query: () => '/acao'
    }),
    getRpgGames: builder.query<Game, void>({
      query: () => '/rpg'
    }),
    getSimulationGames: builder.query<Game, void>({
      query: () => '/simulacao'
    }),
    getFightGames: builder.query<Game, void>({
      query: () => '/luta'
    }),
    getGame: builder.query<Game, string>({
      query: id => `/jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGamesQuery,
  useGetOnSaleQuery,
  useGetComingSoonQuery,
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetGameQuery
} = api
export default api
