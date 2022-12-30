import { Button, Typography } from '@mui/material'
import React, { FC } from 'react'
import s from "./../styles/DrawBtn.module.scss";

type PropsType = {
   width: number
   height: number
   bgColor: string
   title: string
}

const DrawerBtn: FC<PropsType> = ({width, height, bgColor, title}) => {
  return (
   <button style={{backgroundColor: bgColor, width: width, height: height}} className={s.container}>
        <Typography variant='h6'>{title}</Typography>
   </button>
  )
}

export default DrawerBtn
