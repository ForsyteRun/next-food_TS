import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shortCardDataType } from "../../types/types";

type SelectedPizzasState = {
   items: {}
   totalPrice: number
   totalCount: number
}

const initialState: SelectedPizzasState = {
   items: {}, 
   totalPrice: 0,
   totalCount: 0
}

export const selectedPizzas = createSlice({
   name: 'selectedPizzas',
   initialState,
   reducers: {
      selectedPizzas: (state: SelectedPizzasState, action: PayloadAction<shortCardDataType> ) => {
         return {
            ...state,
            items: {
               ...state.items,
               //@ts-ignore
               [action.payload.id]: !state.items[action.payload.id] 
               ? [action.payload] 
               //@ts-ignore
               : [...state.items[action.payload.id], action.payload] 
            },
            totalCount: Object.keys(state.items).length
         }
      },
      setTotalPrice: (state: SelectedPizzasState, action: PayloadAction<number> ) => {
         state.totalPrice = action.payload
      },
      setTotalCount: (state: SelectedPizzasState, action: PayloadAction<number> ) => {
         state.totalCount = action.payload
      },
   }
})

export const selectedPizzasAction = selectedPizzas.actions

export default selectedPizzas.reducer