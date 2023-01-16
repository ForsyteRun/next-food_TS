import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useActions } from "../hooks/useActions";
import { useAppDispatch } from "../store/hooks";
import Select, { GroupBase, SingleValue } from 'react-select'
import { AnyIfEmpty } from 'react-redux';
import { IndexedAccessType } from 'typescript';
import { StylesConfig, StylesProps } from 'react-select/dist/declarations/src/styles';

type ItemSortBy = {
  value: String
  label: String
  id: number
}

type PropsType = {
  itemsSort: Array<ItemSortBy>
}

const SortBy: React.FC<PropsType> = ({itemsSort}) => {
  const dispatch = useAppDispatch()
  const {filters} = useActions()
  
 const onChange = (newValue: SingleValue<ItemSortBy | null>) => {
    newValue && dispatch(filters(newValue.id))
 }

 const itemStyles: StylesConfig  = {
  valueContainer: (styles: any) =>  {
    return {
      ...styles, 
     paddingBottom: '9px',
    }
  },
  control: () =>  {
    return {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    }
  },
  option: (styles, {isFocused}) => {
    return {
      ...styles, 
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: isFocused ?'700' : '400',
    fontSize: '14px',
    lineHeight: '17px',
    color: isFocused ? '#FE5F1E' : '#000',
    backgroundColor: isFocused ?  'rgba(254, 95, 30, 0.05)' : '',
    borderRadius: '10px',
    cursor: 'pointer',
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
      boxShadow: '0 5px 15px 0 #999'
    }
  },
  singleValue: (styles) => {
      return {
        ...styles,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '17px',
        color: '#FE5F1E',
      }
    }
  }

  return (
   <Stack flexDirection={'row'} alignItems={'center'} sx={{flexBasis: '270px'}}>
    <Typography gutterBottom variant="h6" component="span">сортировка по: </Typography>
    <Select<ItemSortBy, false>
      id="select"
      instanceId="select"
      //@ts-ignore
      styles={itemStyles}
      defaultValue={itemsSort[0]}
      options={itemsSort}
      onChange={onChange}
  />
   </Stack>
  );
}

export default SortBy;
