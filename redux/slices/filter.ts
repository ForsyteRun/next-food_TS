import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface filterState {
  categoryId: number | null
  sort: string
}

const initialState: filterState = {
  categoryId: null,
  sort: 'popular'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterReducer: (
      state: filterState,
      action: PayloadAction<number | null>
    ) => {
      state.categoryId = action.payload
    },
    sortReducer: (state: filterState, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { filterReducer, sortReducer } = filterSlice.actions

export default filterSlice.reducer
