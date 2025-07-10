import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      nunber?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/checkout'
  }),
  endpoints: builder => ({
    purchase: builder.mutation<unknown, PurchasePayload>({
      query: body => ({
        url: '/',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseMutation } = api
