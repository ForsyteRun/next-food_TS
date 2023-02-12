import React from "react";

import { useAppSelector } from "../store/hooks";
import { AppState } from "../store";

import { theme } from "../theme/theme";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EuroIcon from "@mui/icons-material/Euro";

import s from "./../styles/CartBtn.module.scss";

const CartBtn = React.memo(() => {
  
  const { totalPrice, totalCount, items } = useAppSelector(
    (state: AppState) => state.selectedPizzas
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      width="150px"
      height="50px"
      sx={{ backgroundColor: theme.palette.primary.main }}
      className={s.container}
    >
      <Stack direction="row" alignItems="center" color="#fff">
        <span className={s.left}>{totalPrice}</span>
        <EuroIcon fontSize="small" />
      </Stack>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
      />
      <Stack direction="row" alignItems="center" color="#fff">
        <ShoppingCartOutlinedIcon fontSize="small" />
        <span className={s.right}>{totalCount}</span>
      </Stack>
    </Stack>
  );
});

export default CartBtn;
