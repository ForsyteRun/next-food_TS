import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shortCardDataType } from "../../types/types";

type ObjItemsType = {
   items: shortCardDataType[]
   totalPriceItem: number
   totalCountItem:number
}

type SelectedPizzasState = {
   items: {
      [ket: number]: ObjItemsType
   }
   totalPrice: number
   totalCount: number
}

const initialState: SelectedPizzasState = {
   items: {}, 
   totalPrice: 0,
   totalCount: 0
}

const getArraySelectedPizzas = (currentCard: any) => {
   return Object.values(currentCard).map((obj: any) => obj.items).flat()
 }

 const getSumValueSelectedPizzas = (element: any) => {
    return element.reduce((el: any, init: any) => init.price + el, 0)
 }

//  const getAllDataItems = (state: any, action: any) => {
//    const currentPizza = state[action]   
//    currentPizza.totalCountItem = currentPizza.items.length
//    currentPizza.totalPriceItem = currentPizza.items.reduce((el: any, init: any) => init.price + el, 0)

//    state.totalCount = getArraySelectedPizzas(state).length
//    state.totalPrice = getSumValueSelectedPizzas(getArraySelectedPizzas(state))
//  }

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
            totalCount: getArraySelectedPizzas(currentCard).length,
            totalPrice: getSumValueSelectedPizzas(getArraySelectedPizzas(currentCard))
         }
      },
      removeAllInDraw: (state: SelectedPizzasState) => {
         state.items = {}
         state.totalCount = 0
         state.totalPrice = 0
      },
      addOnePizza: (state: SelectedPizzasState, action: PayloadAction<number>) => {
         //todo: refactor addOnePizza & removeOnePizza
         const currentPizza = state.items[action.payload]    

         currentPizza.items.push(currentPizza.items[currentPizza.items.length-1])
         currentPizza.totalCountItem = currentPizza.items.length
         currentPizza.totalPriceItem = currentPizza.items.reduce((el: any, init: any) => init.price + el, 0)

         state.totalCount = getArraySelectedPizzas(state.items).length
         state.totalPrice = getSumValueSelectedPizzas(getArraySelectedPizzas(state.items))
      },
      removeOnePizza: (state: SelectedPizzasState, action: PayloadAction<number>) => {
         const currentPizza = state.items[action.payload]    

         currentPizza.items.length && currentPizza.items.pop()
         currentPizza.totalCountItem = currentPizza.items.length
         currentPizza.totalPriceItem = currentPizza.items.reduce((el: any, init: any) => init.price + el, 0)

         state.totalCount = getArraySelectedPizzas(state.items).length
         state.totalPrice = getSumValueSelectedPizzas(getArraySelectedPizzas(state.items))
      }
   }
})

export const {addPizzas, removeAllInDraw, addOnePizza, removeOnePizza} = selectedPizzas.actions

export default selectedPizzas.reducer