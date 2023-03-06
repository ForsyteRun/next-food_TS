import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardDataType } from '../types/types'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63fec9bfc5c800a72385b5d4.mockapi.io'
  }),
  tagTypes: ['pizzas'],
  endpoints: (build) => ({
    getAll: build.query<CardDataType[], void>({
      query: () => '/items'
    }),

    getSort: build.query<CardDataType[], string>({
      query: (str) => `/items?sortBy=${str}`
    })
  })
  // endpoints: (build) => ({
  //   getPizzas: build.query({
  //     query: ({ categoryId, sort, searchValue, pageNumber }) =>
  //       `?sortBy=${sort}
  //       &${categoryId !== null ? `category=${categoryId}` : ''}
  //       &${searchValue ? `search=${searchValue}` : ''}
  //       &p=${pageNumber}
  //       &l=4`
  //   })
  // })
})

export const { useGetAllQuery, useGetSortQuery } = pizzaApi
