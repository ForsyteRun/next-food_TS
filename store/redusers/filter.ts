import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
interface filtersState {
  sortBy: number
}

const initialState: filtersState = {
  sortBy: 0,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filters: (state: filtersState, action: PayloadAction<number>) => {
      state.sortBy = action.payload
    }
  },
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer