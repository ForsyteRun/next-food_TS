import filterReduser from './redusers/filter';
import { configureStore, } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer: {
    filters: filterReduser
   },
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


