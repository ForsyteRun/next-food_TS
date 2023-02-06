import { Typography, Stack, ListItemSecondaryAction } from '@mui/material'
import Head from 'next/head';
import Image from 'next/image'
import React from 'react'
import DrawerBtn from '../components/DrawerBtn'
import DrawOrder from '../components/DrawOrder';
import { AppState } from '../store';
import { useAppSelector } from '../store/hooks';
import s from "./../styles/Draw.module.scss";

const Draw = () => {
  const {items, totalCount, totalPrice} = useAppSelector((state: AppState) => state.selectedPizzas)

  let hasDrawItem = Object.keys(items).length > 0
  
  return (
    <>
      <Head>
        <title>Draw</title>
        <meta name="description" content="NextBootsDraw" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hasDrawItem 
      ? <DrawOrder items={items} totalPrice={totalPrice} totalCount={totalCount}/>
      : <Stack direction='column' alignItems='center' justifyContent='center' className={s.flexContainer}>
        <Stack direction='row' alignItems='center' justifyContent='center' columnGap={'10px'}>
          <Typography variant='h2' >Корзина пустая</Typography>
          <Image src={'/img/😕.svg'} alt='smile' width={32} height={32}/>
        </Stack>
        <p className={s.paragraf}>
          Вероятней всего, вы не заказывали ещё пиццу.
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <Image src={'/img/drawer.png'} alt='manWithDraw' width={300} height={255} style={{marginBottom: '64px'}}/>
        <DrawerBtn width={210} height={46} title='Вернуться назад' bgColor='#282828' borderColor='transparent' textColor='#fff'/>
      </Stack>
      }
    </>
  )
}

export default Draw
