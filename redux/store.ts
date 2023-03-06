import { selectedPizzas } from './slices/selectedPizzas'
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux'
import { pizzaApi } from '../api/pizzas.api'
import filter from './slices/filter'
import search from './slices/search'
import pagination from './slices/pagination'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

//todo: why makeStore??
const makeStore = () =>
  configureStore({
    reducer: {
      [pizzaApi.reducerPath]: pizzaApi.reducer,
      filter,
      search,
      selectedPizzas: selectedPizzas.reducer,
      pagination
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pizzaApi.middleware),
    devTools: true
  })

//todo: why makeStore??
export const store = makeStore()

//refetch in focus out
setupListeners(store.dispatch)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore)
