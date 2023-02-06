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
    setTabPizzas: (state: tabState, action: PayloadAction<number | null>) => {
      state.tabPizzas = action.payload
      console.log(action.payload);
    }
  }

})

export const {setTabPizzas} = getTabSlice.actions

export default getTabSlice.reducer