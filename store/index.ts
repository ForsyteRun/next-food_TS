import { selectedPizzas } from './redusers/selectedPizzas'
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux'
import { pizzaApi } from './../api/pizzas.api'
import { sortSlice } from './redusers/sortPizzas'
import { getTabSlice } from './redusers/tabPizzas'

const makeStore = () =>
  configureStore({
    reducer: {
      [pizzaApi.reducerPath]: pizzaApi.reducer,
      sortBy: sortSlice.reducer,
      getFilterTab: getTabSlice.reducer,
      selectedPizzas: selectedPizzas.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pizzaApi.middleware),
    devTools: true,
  })

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
