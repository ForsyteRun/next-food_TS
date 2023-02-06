import { Button, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Image from "next/image";
import { Box } from '@mui/system';
import DrawerBtn from './DrawerBtn';

type RootObject =  {
  items: PizzasObj
  totalPrice: number
  totalCount: number
}

export interface PizzasObj {
  [key: number]: Items
}
export interface Items {
  items: Pizzas[]
}

export interface Pizzas {
  id: number
  name: string
  price: number
  img: string
  size: number
  type: string
}

const DrawOrder: FC<RootObject> = ({items, totalCount, totalPrice}) => {
  let addedPizzas = Object.keys(items).map((key: string) => items[+key].items[0])
   let arr = Object.keys(items).map((key: string) => items[+key].items)
  console.log(arr.map(el => el.length));
  
  return (
    <Stack maxWidth={821} sx={{m: '0 auto'}}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{mb: '30px'}}>
        <Stack direction='row' alignItems='center' gap='17px'>
          <ShoppingCartOutlinedIcon fontSize='medium' />
          <Typography variant='h2' component='div'>Корзина</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' gap='15px'>
          <DeleteForeverOutlinedIcon sx={{color:'#B6B6B6'}}/>
          <Typography component='div' color='#B6B6B6'>Очистить корзину</Typography>
        </Stack>
      </Stack>
      <Stack>
        {
          addedPizzas.map((el, index) => (
              <Stack key={index} direction='row' alignItems='center' gap='15px' sx={{mb: '30px'}}>
              <Image 
                src={el.img} 
                width={80} 
                height={80}
                priority 
                quality={50}
                alt='pizzaOrder'
                ></Image>
                <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
                  <Stack direction='column' alignItems='left'>
                    <Typography variant='h3' component='div'>{el.name}</Typography>
                    <Typography component='div' sx={{fontSize: '18px', color: '#8D8D8D'}}>{el.type} тесто, {el.size} см</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' gap='12px'>
                      <Button 
                      sx={{borderRadius: '50%', border: '1px solid #FE5F1E', minWidth: '32px', height: '32px', 
                      '&:hover': {background: '#FE5F1E', color: '#fff'}}}>
                        +
                      </Button>
                        {arr.map(el => el.length)}
                      <Button 
                      sx={{borderRadius: '50%', border: '1px solid #FE5F1E', minWidth: '32px', height: '32px', 
                      '&:hover': {background: '#FE5F1E', color: '#fff'}}}>
                        -
                      </Button>
                  </Stack>
                </Stack>
            </Stack>  
          )
        )}

      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{mb: '40px'}}>
          <Typography component='div' sx={{fontSize: '22px'}}>Всего пицц: <b>{totalCount} шт</b></Typography>
          <Typography component='div' sx={{fontSize: '22px', fontWeight: '700',}}>
            Сумма заказа: 
             <Typography component='span' sx={{fontSize: '22px', color: '#FE5F1E', fontWeight: '700', m: '10px'}}>{totalPrice}</Typography>
            ₽
          </Typography>
      </Stack>
      <Stack  direction='row' alignItems='center' justifyContent='space-between'>
        <DrawerBtn width={211} title='Вернуться назад' bgColor='#FFFFFF' height={55} borderColor='1px solid #CACACA' textColor='#CACACA'></DrawerBtn>
        <DrawerBtn width={211} title='Оплатить сейчас' bgColor='#FE5F1E' height={55} borderColor='transparent' textColor='#fff'></DrawerBtn>
      </Stack>
    </Stack>
  )
}

export default DrawOrder
