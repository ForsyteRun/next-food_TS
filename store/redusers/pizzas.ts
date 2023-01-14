import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardDataType } from '../../types/types';
import {HYDRATE} from 'next-redux-wrapper';
interface pizzaState {
  pizzas: Array<CardDataType>
  loading: boolean
}

const initialState: pizzaState = {
  pizzas: [],
  loading: true
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    items: (state: pizzaState, action: PayloadAction<Array<CardDataType>>) => {
      state.loading = false,
      state.pizzas = action.payload
    }
  },
  //reduser for async req to backend - combine redux from server whith redux from front
  extraReducers: {
    [HYDRATE]: (state: pizzaState, action) => {
      state.loading = false,
      state.pizzas = action.payload.pizzas.pizzas
    }
  }
})

export const {items} = pizzasSlice.actions

export default pizzasSlice.reducer