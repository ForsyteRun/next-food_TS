import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UrlObject } from '../../types/types'
import { ParsedQs } from 'qs'

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
    },
    setFilterByUrl: (state: filterState, action: PayloadAction<ParsedQs>) => {
      state.categoryId = Number(action.payload.category)
      state.sort = action.payload.sort + ''
    }
  }
})

export const { filterReducer, sortReducer, setFilterByUrl } =
  filterSlice.actions

export default filterSlice.reducer
