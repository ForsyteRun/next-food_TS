import React from 'react'

import { AppState } from '../redux/store'

import { theme } from '../theme/theme'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import EuroIcon from '@mui/icons-material/Euro'

import s from './../styles/CartBtn.module.scss'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  const { totalPrice, totalCount } = useSelector(
    (state: AppState) => state.selectedPizzas
  )

  return (
    <Stack
      direction='row'
      justifyContent='space-evenly'
      width='150px'
      height='50px'
      sx={{ backgroundColor: theme.palette.primary.main }}
      className={s.container}>
      <Stack direction='row' alignItems='center' color='#fff'>
        <span className={s.left}>{totalPrice}</span>
        <EuroIcon fontSize='small' />
      </Stack>
      <Divider
        orientation='vertical'
        flexItem
        sx={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
      />
      <Stack direction='row' alignItems='center' color='#fff'>
        <ShoppingCartOutlinedIcon fontSize='small' />
        <span className={s.right}>{totalCount}</span>
      </Stack>
    </Stack>
  )
}

export default React.memo(CartBtn)
