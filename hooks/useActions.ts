import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { addOnePizza, addPizzas, removeAllInDraw, removeOnePizza, removePizzaBlock } from "../store/redusers/selectedPizzas";
import { sortPizzas } from "../store/redusers/sortPizzas";
import { setTabPizzas } from "../store/redusers/tabPizzas";

const allActions = {
  ...sortPizzas,
  ...setTabPizzas,
  ...addPizzas,
  ...addOnePizza,
  ...removeAllInDraw,
  ...removeOnePizza,
  ...removePizzaBlock
};

//todo: type obj allActions
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
