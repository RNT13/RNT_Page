import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RawgGame } from '../types/rawgGameType'

const API_KEY = import.meta.env.VITE_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io/api'

interface RawgGameResponse {
  results: RawgGame[]
  next: string | null
  previous: string | null
  count: number
}

export const rawgApiSlice = createApi({
  reducerPath: 'rawgApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  tagTypes: ['Game'],
  endpoints: builder => ({
    getGames: builder.query<RawgGameResponse, { page?: number; search?: string }>({
      query: ({ page = 1, search = '' }) => {
        let url = `/games?key=${API_KEY}&page=${page}`
        if (search) {
          url += `&search=${encodeURIComponent(search)}`
        }
        return url
      },
      providesTags: ['Game']
    })
  })
})

export const { useGetGamesQuery } = rawgApiSlice
