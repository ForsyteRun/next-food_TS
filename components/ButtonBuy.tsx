import React, { FC, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import s from './../styles/btn.module.scss'
import { useAppSelector } from "../store/hooks";

type PropsType = {
  countItem?: number | null 
  disabled?: boolean
  onClickPizza: () => void
};

const ButtonBuy: FC<PropsType> = ({ countItem, disabled, onClickPizza}) => {
  //todo: не работает рендеринг кнопки при переходе по табам
  const {items} = useAppSelector((state) => state.selectedPizzas)
  const [btnState, setBtnState] = useState<number | null>(null)

  const btnCount = (id: number, items: any ) => {
    items[id] &&  setBtnState(items[id].length)
  }

  const onPizzas = () => {
    onClickPizza()
    btnCount(1, items)
  }

  return (
    <>
      <Button onClick={onPizzas} variant="outlined" className={btnState ? s.btnFill : s.btn} disabled={disabled}>
        <AddIcon sx={{ width: "16px", mr: "5px" }} />
        <Typography className={s.text}>Добавить</Typography>
        {btnState && <Box className={s.countEl}>{btnState}</Box>}
      </Button>
    </>
  );
};

export default ButtonBuy;
