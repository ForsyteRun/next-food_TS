import React, { FC } from 'react'

import { AppState } from '../redux/store'
import { filterReducer } from '../redux/slices/filter'

import {
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  ListProps
} from '@mui/material'
import { styled } from '@mui/material/styles'
import s from '../styles/Filter.module.scss'
import { theme } from '../theme/theme'
import { useSelector, useDispatch } from 'react-redux'

const filterItems = ['Мясные', 'Вегетарианские', 'Открытые', 'Закрытые']

const CustomList = styled(List)<ListProps>(() => ({
  width: '828px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}))

const CustomListItem = styled(ListItem)<ListItemProps>(() => ({
  width: 'auto',
  borderRadius: '30px',
  background: theme.palette.grey[500],
  padding: '14px 28px',
  cursor: 'pointer'
}))

const CustomListItemText = styled(ListItemText)<ListItemTextProps>(() => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '16px',
  lineHeight: '19px'
}))

const Filter = () => {
  const categoryId = useSelector((state: AppState) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onChangeCategoryId = (index: number | null) => {
    dispatch(filterReducer(index))
  }

  return (
    <CustomList dense>
      <CustomListItem
        onClick={() => onChangeCategoryId(null)}
        className={categoryId === null ? s.active : ''}>
        <CustomListItemText primary='Все' disableTypography />
      </CustomListItem>
      {filterItems.map((el: string, index) => (
        <CustomListItem
          key={index}
          onClick={() => onChangeCategoryId(index)}
          className={categoryId === index ? s.active : ''}>
          <CustomListItemText primary={el} disableTypography />
        </CustomListItem>
      ))}
    </CustomList>
  )
}

export default React.memo(Filter)
