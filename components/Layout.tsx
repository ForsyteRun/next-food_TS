import { Container, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { theme } from '../theme/theme'

type PropsType = {
   children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={'xl'} sx={{backgroundColor: theme.palette.background.paper, height: '100%'}}>
         <Stack height='inherit'>
            <header>header</header>
            <main style={{flexGrow: 1}}>
               {children}
            </main>
            <footer>footer</footer>
         </Stack>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Layout