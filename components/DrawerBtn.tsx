import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import s from "./../styles/DrawBtn.module.scss";

type PropsType = {
   width: number
   height: number
   bgColor: string
   title: string
}

const DrawerBtn: FC<PropsType> = ({width, height, bgColor, title}) => {
  const router = useRouter()

  return (
   <button onClick={()=>router.back()} style={{backgroundColor: bgColor, width: width, height: height}} className={s.container}>
        <Typography variant='h6'>{title}</Typography>
   </button>
  )
}

export default DrawerBtn
