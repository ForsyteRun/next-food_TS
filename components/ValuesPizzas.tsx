import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { FC, useState } from 'react'
import { allSets, allSizes } from '../pages'
import { theme } from '../theme/theme'
import { CardDataType } from '../types/types'
import s from './../styles/MainCard.module.scss'
import cn from 'classnames'

type PropsType = {
  card: CardDataType
}

export const ValuesPizzas: FC<PropsType> = ({ card }) => {
  const { types, sizes } = card
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

  return (
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
  )
}

export default ValuesPizzas
