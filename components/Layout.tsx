import { Container, CssBaseline, ThemeProvider } from '@mui/material'
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
      <Container maxWidth={'xl'} sx={{backgroundColor: theme.palette.background.paper}} className='headerWrapper'>
         <Header/>
      </Container>
      <Container maxWidth={'xl'} sx={{backgroundColor: theme.palette.background.paper}} className='wrapper'>
         <main style={{flexGrow: 1, paddingTop: '40px'}}>
            {children}
         </main>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Layout