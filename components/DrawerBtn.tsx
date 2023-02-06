import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import s from "./../styles/DrawBtn.module.scss";

type PropsType = {
   width: number
   height: number
   bgColor: string
   title: string
   borderColor: string
   textColor?: string
}

const DrawerBtn: FC<PropsType> = ({width, height, bgColor, title, borderColor, textColor}) => {
  const router = useRouter()

  return (
   <button onClick={()=>router.back()} style={{backgroundColor: bgColor, border: borderColor, width: width, height: height}} className={s.container}>
        <Typography  sx={{color: textColor, fontWeight: 700, fontSize: '14px', lineHeight: 1.21}}>{title}</Typography>
   </button>
  )
}

export default DrawerBtn