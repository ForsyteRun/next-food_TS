import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface searchState {
  searchValue: string | null
}

const initialState: searchState = {
  searchValue: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchReducer: (
      state: searchState,
      action: PayloadAction<string | null>
    ) => {
      state.searchValue = action.payload
    }
  }
})

export const { searchReducer } = searchSlice.actions

export default searchSlice.reducer
