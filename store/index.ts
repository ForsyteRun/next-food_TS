import filterReduser from './redusers/filter';
import { configureStore, } from '@reduxjs/toolkit'
import pizzasReduser from './redusers/pizzas'
import tabReduser from './redusers/tab'

export const store = configureStore({
   reducer: {
    filters: filterReduser,
    pizzas: pizzasReduser,
    tab: tabReduser,
   },
   devTools: true
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


