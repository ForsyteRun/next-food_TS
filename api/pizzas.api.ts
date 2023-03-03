import { CardDataType } from './../types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63fec9bfc5c800a72385b5d4.mockapi.io/items'
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (build) => ({
    getPizzas: build.query({
      query: ({ categoryId, sort }) =>
        `?sortBy=${sort}&${categoryId !== null ? `category=${categoryId}` : ''}`
    })
  })
})

export const { useGetPizzasQuery } = pizzaApi
