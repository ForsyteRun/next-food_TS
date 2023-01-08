import { counterSlice } from './redusers';
import { configureStore, } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer: {
    counter: counterSlice.reducer
   },
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


