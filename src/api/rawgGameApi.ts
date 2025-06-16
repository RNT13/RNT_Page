import { rawgApiSlice } from './rawgApiSlice'

export const rawgGameApi = rawgApiSlice.injectEndpoints({
  endpoints: builder => ({
    getRawgGame: builder.query({
      query: id => `/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    }),
    getUpcomingGames: builder.query({
      query: () => `/games?dates=2025-06-16,2025-12-31&ordering=-added&key=${import.meta.env.VITE_API_KEY}`
    }),
    getPopularGames: builder.query({
      query: () => `/games/lists/popular?discover=true&page_size=20&key=${import.meta.env.VITE_API_KEY}`
    })
  })
})

export const { useGetRawgGameQuery, useGetUpcomingGamesQuery, useGetPopularGamesQuery } = rawgGameApi
