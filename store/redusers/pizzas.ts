import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardDataType } from '../../types/types';

interface pizzaState {
  pizzas: Array<CardDataType>
}

const initialState: pizzaState = {
  pizzas: []
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    pizzas: (state: pizzaState, action: PayloadAction<Array<CardDataType>>) => {
      state.pizzas = action.payload
    }
  },
})

export const {pizzas} = pizzasSlice.actions

export default pizzasSlice.reducer