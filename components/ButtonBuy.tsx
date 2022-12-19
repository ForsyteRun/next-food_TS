import React, { FC } from "react";
import { Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import s from './../styles/btn.module.scss'

type PropsType = {
  countItem?: number
  disabled?: boolean
};

const ButtonBuy: FC<PropsType> = ({ countItem, disabled }) => {
  return (
    <>
      <Button variant="outlined" className={countItem ? s.btnFill : s.btn} disabled={disabled}>
        <AddIcon sx={{ width: "16px", mr: "5px" }} />
        <Typography className={s.text}>Добавить</Typography>
        {countItem && <Box className={s.countEl}>{countItem}</Box>}
      </Button>
    </>
  );
};

export default ButtonBuy;
