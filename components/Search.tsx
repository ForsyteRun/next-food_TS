import React from 'react'

import { useDispatch } from 'react-redux'
import { searchReducer } from '../redux/slices/search'

import { debounce } from 'lodash'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'

const Search = () => {
  const dispatch = useDispatch()
  const [newInputValue, setNewInputValue] = React.useState<string>('')

  const inputFocus = React.useRef<HTMLHeadingElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceValue = React.useCallback(
    debounce((value) => dispatch(searchReducer(value)), 1000),
    []
  )

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewInputValue(event.target.value)
    debounceValue(event.target.value)
  }

  const onRemoveInputValue = () => {
    dispatch(searchReducer(''))
    setNewInputValue('')
    inputFocus.current && inputFocus.current.focus()
  }

  return (
    <TextField
      inputRef={inputFocus}
      id='input-with-icon-textfield'
      label='Search'
      color='info'
      onChange={onChangeSearch}
      value={newInputValue}
      sx={{ width: '250px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: newInputValue && (
          <InputAdornment position='end'>
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              onClick={onRemoveInputValue}
            />
          </InputAdornment>
        )
      }}
      variant='standard'
    />
  )
}

export default Search
