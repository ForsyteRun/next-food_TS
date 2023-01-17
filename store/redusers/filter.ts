import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
interface filtersState {
  sortBy: string
}

const initialState: filtersState = {
  sortBy: 'popular',
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filters: (state: filtersState, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    }
  },
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer