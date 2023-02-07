import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EuroIcon from '@mui/icons-material/Euro';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import { FC } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addOnePizza, removeAllInDraw, removeOnePizza } from '../store/redusers/selectedPizzas';
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
  totalPriceItem: number
  totalCountItem: number
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
  const dispatch = useAppDispatch()
  
  let addedPizzas = Object.keys(items).map((key: string) => items[+key].items[0])
  console.log(addedPizzas.length);

  const removeDraw = () => {
    if(window.confirm('Are you sure?')){
      dispatch(removeAllInDraw())
    }
  }
    
  return (
    <Stack maxWidth={821} sx={{m: '0 auto'}}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{mb: '30px'}}>
        <Stack direction='row' alignItems='center' gap='17px'>
          <ShoppingCartOutlinedIcon fontSize='medium' />
          <Typography variant='h2' component='div'>Корзина</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' gap='15px'>
          <IconButton  aria-label="delete" onClick={removeDraw}>
            <DeleteForeverOutlinedIcon  sx={{color:'#B6B6B6'}}/>
          </IconButton>
          <Typography component='div' color='#B6B6B6'>Очистить корзину</Typography>
        </Stack>
      </Stack>
      <Stack>
        { totalCount && addedPizzas.map((el, index) => (
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
                    <Stack direction='row' alignItems='center' justifyContent='flex-end' gap='25px' flexGrow={1}>
                        <Button onClick={() => dispatch(addOnePizza(el.id))}
                        sx={{borderRadius: '50%', border: '1px solid #FE5F1E', minWidth: '32px', height: '32px', fontSize: '22px',
                        '&:hover': {background: '#FE5F1E', color: '#fff'}}}>
                          +
                        </Button>
                          <Typography component='div' sx={{fontSize: '22px', fontWeight: 700}}>
                            {items[el.id].totalCountItem}
                          </Typography>
                        <Button onClick={() => dispatch(removeOnePizza(el.id))}
                        sx={{borderRadius: '50%', border: '1px solid #FE5F1E', minWidth: '32px', height: '32px', fontSize: '22px',
                        '&:hover': {background: '#FE5F1E', color: '#fff'}}}>
                          -
                        </Button>
                        <Typography component='div' sx={{fontSize: '22px', fontWeight: 700}}>
                            {items[el.id].totalPriceItem}
                            <EuroIcon sx={{verticalAlign: 'text-top'}}/>
                        </Typography>
                        <Button 
                        sx={{borderRadius: '50%', border: '1px solid #D7D7D7', minWidth: '32px', height: '32px', 
                        '&:hover': {background: 'rgba(215, 215, 215, 1)'}}}>
                            <Box 
                            sx={{transform: 'rotate(45deg)', color: 'rgba(215, 215, 215, 1)', 
                            fontSize: '22px', '&:hover':{color: '#fff'}}}>
                              +
                            </Box>
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
