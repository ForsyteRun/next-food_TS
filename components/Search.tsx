import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { searchReducer } from '../redux/slices/search'
import { AppState } from '../redux/store'

const Search = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector((state: AppState) => state.search.searchValue)

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchReducer(event.target.value))
  }

  const onRemoveInputValue = () => {
    dispatch(searchReducer(' '))
  }

  return (
    <TextField
      id='input-with-icon-textfield'
      label='Search'
      color='info'
      onChange={onChangeSearch}
      value={searchValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
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
