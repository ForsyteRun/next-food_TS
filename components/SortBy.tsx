import React, { FC } from 'react'
import Select, { SingleValue } from 'react-select'

import { useAppDispatch } from '../store/hooks'
import { sortPizzas } from '../store/redusers/sortPizzas'

import { Stack, Typography } from '@mui/material'
import { StylesConfig } from 'react-select/dist/declarations/src/styles'

type ItemSortBy = {
  value: string
  label: string
  id: number
}

type PropsType = {
  itemsSort: Array<ItemSortBy>
}

const SortBy: FC<PropsType> = ({ itemsSort }) => {
  const dispatch = useAppDispatch()

  const onChange = (newValue: SingleValue<ItemSortBy | null>) => {
    newValue && dispatch(sortPizzas(newValue.value))
  }

  const itemStyles: StylesConfig = {
    valueContainer: (styles: any) => {
      return {
        ...styles,
        paddingBottom: '9px'
      }
    },
    control: () => {
      return {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }
    },
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: isFocused ? '700' : '400',
        fontSize: '14px',
        lineHeight: '17px',
        color: isFocused ? '#FE5F1E' : '#000',
        backgroundColor: isFocused ? 'rgba(254, 95, 30, 0.3)' : '',
        borderRadius: '10px',
        cursor: 'pointer'
      }
    },
    indicatorsContainer: () => {
      return {
        display: 'none'
      }
    },
    indicatorSeparator: () => {
      return {
        display: 'none'
      }
    },
    menu: () => {
      return {
        margin: '0',
        position: 'absolute',
        width: '150px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px 0 #999',
        backgroundColor: '#fff',
        zIndex: 5
      }
    },
    singleValue: (styles) => {
      return {
        ...styles,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '17px',
        color: '#FE5F1E'
      }
    }
  }

  return (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      sx={{ flexBasis: '270px' }}>
      <Typography gutterBottom variant='h6' component='span'>
        сортировка по:{' '}
      </Typography>
      <Select<ItemSortBy, false>
        id='select'
        instanceId='select'
        //@ts-ignore
        styles={itemStyles}
        defaultValue={itemsSort[0]}
        options={itemsSort}
        onChange={onChange}
      />
    </Stack>
  )
}

export default React.memo(SortBy)
