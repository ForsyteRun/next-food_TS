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
      addPizzas: (state: SelectedPizzasState, action: PayloadAction<shortCardDataType> ) => {
         const currentCard = {
               ...state.items,
               //@ts-ignore
               [action.payload.id]: !state.items[action.payload.id] 
               ? [action.payload] 
               //@ts-ignore
               : [...state.items[action.payload.id], action.payload] 
         }
         
         const arr =  Object.values(currentCard).flat()
         const price = arr.reduce((sum: number, item: any ): number => item.price + sum, 0)
         
         return {
            ...state, 
            items: currentCard,
            totalCount: Object.values(currentCard).flat().length,
            totalPrice: price
         }
      },
   }
})

export const {addPizzas} = selectedPizzas.actions

export default selectedPizzas.reducer