import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shortCardDataType } from "../../types/types";

type SelectedPizzasState = {
   items: {}
   totalPrice: number | null
   totalCount: number
}

const initialState: SelectedPizzasState = {
   items: {}, 
   totalPrice: 0,
   totalCount: 0
}

export const selectedPizzas: any = createSlice({
   name: 'selectedPizzas',
   initialState,
   reducers: {
      selectedPizzas: (state: SelectedPizzasState, action: PayloadAction<shortCardDataType> ) => {
         const currentCard = {
               ...state.items,
               //@ts-ignore
               [action.payload.id]: !state.items[action.payload.id] 
               ? [action.payload] 
               //@ts-ignore
               : [...state.items[action.payload.id], action.payload] 
         }
            
         const arrPrice =  Object.values(state.items).flat()
         const price: number = arrPrice.reduce((sum: number, item: any ): number => item.price + sum, 0)
            
         return {
            ...state, 
            items: currentCard,
            totalCount: Object.values(state.items).flat().length,
            totalPrice: price
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