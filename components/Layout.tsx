import { Container, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { theme } from '../theme/theme'
import Header from './Header'

type PropsType = {
   children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={'xl'} sx={{backgroundColor: theme.palette.background.paper}} className='wrapper'>
         <Header/>
         <main>
            {children}
         </main>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Layout