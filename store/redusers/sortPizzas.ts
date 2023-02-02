import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface sortState {
  sortBy: string
}

const initialState: sortState = {
  sortBy: 'popular',
}

export const sortSlice = createSlice({
  name: 'sortPizzas',
  initialState,
  reducers: {
    sortPizzas: (state: sortState, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    }
  },
})

export const filterActions = sortSlice.actions

export default sortSlice.reducer