import { selectedPizzas } from './slices/selectedPizzas'
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux'
import { pizzaApi } from '../api/pizzas.api'
import filter from './slices/filter'

const makeStore = () =>
  //todo: why makeStore??
  configureStore({
    reducer: {
      [pizzaApi.reducerPath]: pizzaApi.reducer,
      filter,
      selectedPizzas: selectedPizzas.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pizzaApi.middleware),
    devTools: true
  })

//todo: why makeStore??
export const store = makeStore()

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
