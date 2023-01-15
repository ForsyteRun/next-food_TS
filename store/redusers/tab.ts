import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardDataType } from '../../types/types';
import { HYDRATE } from 'next-redux-wrapper';

interface tabState {
  setTab: number | null
  tabItems: Array<CardDataType>
}

const initialState: tabState = {
  setTab: null,
  tabItems: []
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    tab: (state: tabState, action: PayloadAction<number | null>) => {
      state.setTab = action.payload
    },
    filterTab: (state: tabState, action: PayloadAction<Array<CardDataType>>) => {
      state.tabItems = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state: tabState, action) => {
      state.tabItems = action.payload.tab.tabItems      // state.setTab = action.payload
    }
  }
})

export const {tab, filterTab} = tabSlice.actions
export const tabActions = tabSlice.actions

export default tabSlice.reducer