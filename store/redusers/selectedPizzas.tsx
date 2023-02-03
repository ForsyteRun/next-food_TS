import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardDataType } from "../../types/types";

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
      selectedPizzas: (state: SelectedPizzasState, action: PayloadAction<CardDataType> ) => {
         console.log(action.payload)
         return {
            ...state,
            items: {
               //@ts-ignore
               [action.payload.id]: [...state.items[action.payload.id], action.payload]
            }
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