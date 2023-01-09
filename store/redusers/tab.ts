import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface tabState {
  setTab: number | null
}

const initialState: tabState = {
  setTab: null
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    tab: (state: tabState, action: PayloadAction<number | null>) => {
      state.setTab = action.payload
    }
  },
})

export const {tab} = tabSlice.actions

export default tabSlice.reducer