import Image from 'next/image'
import React from 'react'
import { FC, useState } from 'react'

import { AppState } from '../redux/store'
import { addPizzas } from '../redux/slices/selectedPizzas'

import cn from 'classnames'

import { CardDataType, shortCardDataType } from '../types/types'

import { theme } from '../theme/theme'
import { Stack } from '@mui/material'
import { Card, Typography } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

import s from './../styles/MainCard.module.scss'

import ButtonBuy from './ButtonBuy'
import { useSelector } from 'react-redux'

type PropsType = {
  card: CardDataType
  allSets: Array<string>
  allSizes: Array<number>

  selectedPizzas: (card: shortCardDataType) => void
  dispatch: (el: any) => void
}

const MainCard: FC<PropsType> = ({ card, allSets, allSizes, dispatch }) => {
  const { imageUrl, price, name, types, sizes, id } = card
  const items = useSelector((state: AppState) => state.selectedPizzas.items)

  //pizza's type state
  const [typeItem, setTypeItem] = useState<number>(types[0])

  //pizza's sizes state
  const [sizeItem, setSizeItem] = useState<number>(0)

  const onSelectSets = (index: number) => {
    setTypeItem(index)
  }

  const onSelectSizes = (index: number) => {
    setSizeItem(index)
  }

  const addPizzaToCart = ({ id, name, imageUrl, price }: CardDataType) => {
    let obj = {
      id,
      name,
      price,
      img: imageUrl,
      size: allSizes[sizeItem],
      type: allSets[typeItem]
    }
    dispatch(addPizzas(obj))
  }

  return (
    <Card sx={{ width: 280, boxShadow: 'none' }}>
      <Image
        src={imageUrl}
        alt='pizza'
        width={260}
        height={260}
        priority
        quality={100}
        sizes='(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw'
        className={s.img}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography
          gutterBottom
          variant='h3'
          component='div'
          sx={{ textAlign: 'center', height: '55px', mb: 0 }}>
          {name}
        </Typography>
      </CardContent>
      <Stack className={s.mainContainer} bgcolor={theme.palette.grey[300]}>
        <Stack className={s.setConteiner}>
          {allSets?.map((el: string, index) => (
            <Typography
              key={el}
              variant='h6'
              component='div'
              className={cn(
                s.topSet,
                typeItem === index && s.active,
                !types.includes(index) && s.disabled
              )}
              onClick={() => onSelectSets(index)}>
              {el}
            </Typography>
          ))}
        </Stack>
        <Stack className={s.setConteiner}>
          {allSizes?.map((el: number, index: number) => (
            <Typography
              key={el}
              variant='h6'
              component='div'
              className={cn(
                s.topSet,
                sizeItem === index && s.active,
                !sizes.includes(el) && s.disabled
              )}
              onClick={() => onSelectSizes(index)}>
              {el} см
            </Typography>
          ))}
        </Stack>
      </Stack>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Typography gutterBottom variant='h3' component='div'>
          от {price}
          <span>&#36;</span>
        </Typography>
        <ButtonBuy
          onClickPizza={() => addPizzaToCart(card)}
          //@ts-ignore
          countItem={items[id] && items[id].items.length}
        />
      </CardActions>
    </Card>
  )
}

export default React.memo(MainCard)
