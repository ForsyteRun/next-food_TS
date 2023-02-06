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
      console.log('sort')
      state.sortBy = action.payload
    }
  },
})

export const {sortPizzas} = sortSlice.actions

export default sortSlice.reducer