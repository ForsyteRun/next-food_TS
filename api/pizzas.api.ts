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
    getAllPizzas: build.query<Array<CardDataType>, any>({
      query: () => ``
    })
  })
})

//todo: old variant
// getAllPizzas: build.query<Array<CardDataType>, any>({
//   query: (tab: any, sortBy?: any) =>
//   `pizzas?${tab !== null ? `category=${tab}` : ''}&_sort=${sortBy}`
// })

export const { useGetAllPizzasQuery } = pizzaApi
