import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageNumber } from '../redux/slices/pagination'

import { AppState } from '../redux/store'

import Stack from '@mui/material/Stack'
import { Pagination } from '@mui/material'

const Pagi = () => {
  const pageNumber = useSelector(
    (state: AppState) => state.pagination.pageNumber
  )
  const dispatch = useDispatch()

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value))
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        page={pageNumber}
        shape='rounded'
        size='large'
        onChange={handleChange}
      />
    </Stack>
  )
}

export default Pagi
