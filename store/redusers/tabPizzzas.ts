import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardDataType } from '../../types/types';
import { HYDRATE } from 'next-redux-wrapper';

interface tabState {
  tabPizzas: number | null
}

const initialState: tabState = {
  tabPizzas: null,
}

export const getTabSlice = createSlice({
  name: 'getTab',
  initialState,
  reducers: {
    tabPizzas: (state: tabState, action: PayloadAction<number | null>) => {
      state.tabPizzas = action.payload
    },
    // filterPizzas: (state: tabState, action: PayloadAction<Array<CardDataType>>) => {
    //   state.tabItems = action.payload
    // },
  },
  // extraReducers: {
  //   [HYDRATE]: (state: tabState, action) => {
  //     state.tabItems = action.payload.tab.tabItems      // state.setTab = action.payload
  //   }
  // }
})

// export const {tab, filterTab} = tabSlice.actions
export const tabActions = getTabSlice.actions

export default getTabSlice.reducer