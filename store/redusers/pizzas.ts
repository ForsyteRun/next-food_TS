import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardDataType } from '../../types/types';
import {HYDRATE} from 'next-redux-wrapper';
interface pizzaState {
  pizzas: Array<CardDataType>
  isLoading: boolean
}

const initialState: pizzaState = {
  pizzas: [],
  isLoading: false
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    items: (state: pizzaState, action: PayloadAction<Array<CardDataType>>) => {
      state.pizzas = action.payload
      state.isLoading = true
    },
    isLoadingItems: (state: pizzaState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
  //reduser for async req to backend - combine redux from server whith redux from front
  extraReducers: {
    [HYDRATE]: (state: pizzaState, action) => {
      state.pizzas = action.payload.pizzas.pizzas
      state.isLoading = false
    }
  }
})

export const {items} = pizzasSlice.actions
export const pizzasActions = pizzasSlice.actions

export default pizzasSlice.reducer