import { Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import DrawerBtn from '../components/DrawerBtn'
import s from "./../styles/Draw.module.scss";


const Draw = () => {
  return (
   <div>
      wedwe
   </div>
   //  <Stack direction='column' alignItems='center' justifyContent='center' className={s.flexContainer}>
   //    <Typography variant='h2'>Корзина пустая</Typography>
   //    <Image src={'/img/😕.svg'} alt='smile' width={32} height={32}/>
   //    <p className={s.paragraf}>
   //       Вероятней всего, вы не заказывали ещё пиццу.
   //       Для того, чтобы заказать пиццу, перейди на главную страницу.
   //    </p>
   //    <Image src={'/img/drawer.png'} alt='manWithDraw' width={300} height={255}/>
   //    <DrawerBtn width={210} height={46} title='Вернуться назад' bgColor='#282828'/>
   //  </Stack>
  )
}

export default Draw
