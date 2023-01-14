import filterReduser from './redusers/filter';
import { configureStore, ThunkAction} from '@reduxjs/toolkit'
import pizzasReduser from './redusers/pizzas'
import tabReduser from './redusers/tab'
import {Action} from 'redux';
import {createWrapper} from 'next-redux-wrapper';

const makeStore  = () => 
  configureStore({
    reducer: {
      filters: filterReduser,
      pizzas: pizzasReduser,
      tab: tabReduser,
    },
    devTools: true
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore);


