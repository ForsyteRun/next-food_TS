import { createTheme,  responsiveFontSizes } from '@mui/material/styles';

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
       }
       palette: {
          primary: {
             main: string
             dark: string
             light: string
            }
         secondary: {
               main: string
            }
         background: {
               paper: string
            }
         grey: {
            900: string,
            800: string,
            700: string,
            600: string,
            500: string,
            400: string,
            300: string,
            }

       }
       typography: {
         fontFamily: string
         fontWeightMedium: number
         fontWeightBold: number
         h1: {
            fontFamily: string
            fontWeight: number
            fontSize: string
            lineHeight: number
            letterSpacing: string
         }
         h2: {
            fontFamily: string
            fontWeight: number
            fontSize: string
            lineHeight: number
            letterSpacing: string
         }
         h3: {
            fontFamily: string
            fontWeight: number
            fontSize: string
            lineHeight: number
            letterSpacing: string
         }
         h4: {
            fontFamily: string
            fontWeight: number
            fontSize: string
            lineHeight: number
            letterSpacing: string
         }
         h6: {
            fontFamily: string
            fontWeight: number
            fontSize: string
            lineHeight: number
            letterSpacing: string
         }
       }
   }
}

const simpleTheme = createTheme({
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
         main: '#FE5F1E',
         dark: '#EB5A1E',
         light: '#fff7f4'
      },
      secondary: {
         main: '#FE5F1E'
      },
      background: {
         paper: '#fff'
      },
      grey: {
         900: '#282828',
         800: '#181818',
         700: '#2C2C2C',
         600: '#7B7B7B',
         500: '#F9F9F9',
         400: '#F6F6F6',
         300: '#F3F3F3',
      }
    },
   typography: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeightMedium: 700,
      fontWeightBold: 800,
      h1: {
         fontFamily: "'Montserrat', sans-serif",
         fontWeight: 800,
         fontSize: '24px',
         lineHeight: 1.21,
         letterSpacing: '1%'
      },
      h2: {
         fontFamily: "'Montserrat', sans-serif",
         fontWeight: 700,
         fontSize: '32px',
         lineHeight: 1.21,
         letterSpacing: '1%'
      },
      h3: {
         fontFamily: "'Montserrat', sans-serif",
         fontWeight: 800,
         fontSize: '20px',
         lineHeight: 1.21,
         letterSpacing: '1%'
      },
      h4: {
         fontFamily: "'Montserrat', sans-serif",
         fontWeight: 700,
         fontSize: '16px',
         lineHeight: 1.21,
         letterSpacing: '1.5%'
      },
      h6: {
         fontFamily: "'Montserrat', sans-serif",
         fontWeight: 700,
         fontSize: '14px',
         color: '#2C2C2C',
         lineHeight: 1.21,
         letterSpacing: '1.5%'
      },
    },
})

export const theme = responsiveFontSizes(simpleTheme)