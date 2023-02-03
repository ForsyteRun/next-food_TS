import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { selectedPizzasAction } from '../store/redusers/selectedPizzas';

import { sortActions } from '../store/redusers/sortPizzas';
// import { pizzasActions } from '../store/redusers/pizzas';
import { tabActions } from '../store/redusers/tabPizzzas';

const allActions = {
   ...sortActions,
   ...tabActions,
   ...selectedPizzasAction
}

export const useActions = () => {
   const dispatch =  useDispatch()
   return bindActionCreators(allActions, dispatch)
}