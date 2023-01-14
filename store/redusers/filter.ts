import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface filtersState {
  sortBy: string
  category: number | null
}

const initialState: filtersState = {
  sortBy: 'popular',
  category: null,
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

export const {filters} = filterSlice.actions

export default filterSlice.reducer