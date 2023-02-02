import { CardDataType } from './../types/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper';

type Query = {
   sortBy: string
   tab: number | null
}

export const pizzaApi = createApi({
   reducerPath: 'pizzaApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
        return action.payload[reducerPath]
      }
    },
   endpoints: (build) => ({
   
      getAllPizzas: build.query<Array<CardDataType>, any>({
         query: (tab: any, sortBy?: any) => `pizzas?${tab !== null ? `category=${tab}` : ''}&_sort=${sortBy}`
      })
      // _sort=${sortBy}&
      // filterByTab: build.query<Array<CardDataType>, number | null>({
      //    query: (tab: number | null) => `pizzas?${tab !== null ? `category=${tab}` : ''}`
      // })
   })
})

export const {useGetAllPizzasQuery} = pizzaApi