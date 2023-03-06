import React from 'react'
import Select, { SingleValue } from 'react-select'

import { Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { StylesConfig } from 'react-select/dist/declarations/src/styles'
import { sortItems } from '../types/types'
import { sortReducer } from '../redux/slices/filter'
import { useGetSortQuery } from '../api/pizzas.api'

const sortItems = [
  { value: 'rating', label: 'популярности', id: 0 },
  { value: 'price', label: 'цене', id: 1 },
  { value: 'name', label: 'алфавиту', id: 2 }
]

const Sort = () => {
  const dispatch = useDispatch()
  const onChange = (newValue: SingleValue<sortItems | null>) => {
    newValue && dispatch(sortReducer(newValue.value))
  }

  // const { data: sortURL } = useGetSortQuery('ss')

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
      <Select<sortItems, false>
        id='select'
        instanceId='select'
        //@ts-ignore
        styles={itemStyles}
        defaultValue={sortItems[0]}
        options={sortItems}
        onChange={onChange}
      />
    </Stack>
  )
}

export default React.memo(Sort)
