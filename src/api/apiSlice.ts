import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/eplay'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (Header) => {
      Header.set('Content-Type', 'application/json')
      return Header
    }
  }),
  tagTypes: ['Game'],
  endpoints: () => ({})
})
