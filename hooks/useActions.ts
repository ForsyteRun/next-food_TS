import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { filterActions } from '../store/redusers/sortPizzas';
import { pizzasActions } from '../store/redusers/pizzas';
import { tabActions } from '../store/redusers/tabPizzzas';

const allActions = {
   ...pizzasActions,
   ...filterActions,
   ...tabActions,
}

export const useActions = () => {
   const dispatch =  useDispatch()
   return bindActionCreators(allActions, dispatch)
}