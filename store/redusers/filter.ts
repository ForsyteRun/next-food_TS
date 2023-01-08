import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  sortBy: string
  category: number
}

const initialState: FiltersState = {
  sortBy: 'popular',
  category: 0,
}

export const counterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filters: (state: FiltersState, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    }
  },
})

export const {filters} = counterSlice.actions

export default counterSlice.reducer