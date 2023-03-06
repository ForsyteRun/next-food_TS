import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63fec9bfc5c800a72385b5d4.mockapi.io/'
  }),
  endpoints: (build) => ({
    getPizzas: build.query({
      query: ({ categoryId, sort, searchValue, pageNumber }) => ({
        url: '/items',
        params: {
          category: categoryId === null ? '' : categoryId,
          sortBy: sort,
          search: searchValue,
          p: pageNumber,
          l: 4
        }
      })
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

export const { useGetPizzasQuery } = pizzaApi
