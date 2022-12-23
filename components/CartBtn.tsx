import { Stack } from "@mui/material";
import React, { FC } from "react";
import { theme } from "../theme/theme";
import s from "./../styles/CartBtn.module.scss";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EuroIcon from '@mui/icons-material/Euro';

type PropsType = {
  price: number;
  items: number;
};

const CartBtn: FC<PropsType> = ({ price, items }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      width="150px"
      height="50px"
      sx={{ backgroundColor: theme.palette.primary.main }}
      className={s.container}
    >
      <Stack direction='row' alignItems='center' color="#fff">
        <span className={s.left}>{price}</span>
        <EuroIcon fontSize="small" />
      </Stack>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
      />
      <Stack direction='row' alignItems='center' color="#fff">
        <ShoppingCartOutlinedIcon fontSize="small" />
        <span className={s.right} >{items}</span>
      </Stack>
    </Stack>
  );
};

export default CartBtn;
