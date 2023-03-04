import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PageNumberType {
  pageNumber: number
}

const initialState: PageNumberType = {
  pageNumber: 1
}

export const pagiSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageNumber: (state: PageNumberType, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    }
  }
})

export const { setPageNumber } = pagiSlice.actions

export default pagiSlice.reducer
