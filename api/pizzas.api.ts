import { CardDataType } from './../types/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper';

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
      //get init allPizzasState
      getAllPizzas: build.query<Array<CardDataType>, void>({
         query: () => `pizzas`,
      }) 
   })
})

export const {useGetAllPizzasQuery} = pizzaApi