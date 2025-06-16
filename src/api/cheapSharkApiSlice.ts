import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Deal, Store } from '../types/cheapSharkType'

const BASE_URL = 'https://www.cheapshark.com/api/1.0'

export const cheapSharkApiSlice = createApi({
  reducerPath: 'cheapSharkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  tagTypes: ['Deal', 'Store'],
  endpoints: builder => ({
    getDeal: builder.query<Deal[], { title?: string; steamAppID?: string }>({
      query: ({ title = '', steamAppID = '' }) => {
        let url = `/deals?sortBy=price`
        if (title) url += `&title=${encodeURIComponent(title)}`
        if (steamAppID) url += `&steamAppID=${steamAppID}`
        return url
      },
      providesTags: ['Deal']
    }),
    getStores: builder.query<Store[], void>({
      query: () => `/stores`,
      providesTags: ['Store']
    })
  })
})

export const { useGetDealQuery, useGetStoresQuery } = cheapSharkApiSlice
