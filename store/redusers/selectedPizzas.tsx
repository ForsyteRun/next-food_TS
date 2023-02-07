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
         //@ts-ignore
         const currentPizza = !state.items[action.payload.id] 
         ? [action.payload] 
         //@ts-ignore
         : [...state.items[action.payload.id].items, action.payload]


          const getArraySelectedPizzas = () => {
           return Object.values(currentCard).map((obj: any) => obj.items).flat()
         }

         const getSumValueSelectedPizzas = (element: any) => {
            return element.reduce((el: any, init: any) => init.price + el, 0)
         }

         const currentCard = {
               ...state.items,
               [action.payload.id]: {
                  items: currentPizza,
                  totalPriceItem: getSumValueSelectedPizzas(currentPizza),
                  totalCountItem: currentPizza.length
               }
         }

         return {
            ...state, 
            items: currentCard,
            totalCount: getArraySelectedPizzas().length,
            totalPrice: getSumValueSelectedPizzas(getArraySelectedPizzas())
         }
      },
      removeAllInDraw: (state: SelectedPizzasState) => {
         state.items = {}
      }
   }
})

export const {addPizzas, removeAllInDraw} = selectedPizzas.actions

export default selectedPizzas.reducer