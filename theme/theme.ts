import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
   interface Theme {
      breakpoints: {
         values: {
           xs: number
           sm: number
           md: number
           lg: number
           xl: number
         }
       },
       palette: {
          primary: {
             main: string
            },
         secondary: {
               main: string
            },
         background: {
               paper: string
            }

       }
   }
}
export const theme = createTheme({
   breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1024,
        xl: 1340,
      },
    },
    palette: {
      primary: {
         main: '#FE5F1E'
      },
      secondary: {
         main: '#FE5F1E'
      },
      background: {
         paper: '#fff'
      }
    }
})