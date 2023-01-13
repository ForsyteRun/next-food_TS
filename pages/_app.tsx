import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store, wrapper } from "../store";
import "../styles/globals.scss";
import { CardDataType } from "../types/types";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC, ReactNode, useEffect } from "react";
import { theme } from "../theme/theme";
import Header from '../components/Header'
interface Props {
  items: Array<CardDataType>;
}

const App = ({ Component, pageProps, items }: AppProps & Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={"xl"}
        sx={{ backgroundColor: theme.palette.background.paper }}
        className="headerWrapper"
      >
        <Header />
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          backgroundColor: theme.palette.background.paper,
          minHeight: "100%",
        }}
        className="wrapper"
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);

// App.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/db.json')
//   const json = await res.json()
//   return { items: json.pizzas }
// }

//todo: fetch запрос каждый раз при переходе на любую старинц...это плохо
//todo: margin in container
//todo: поправить вёрстку после data из бека
//todo:  [theme.breakpoints.down('md')] - key bad reading of TypeScript
//todo: min 600px how create burger?
//todo: Tab not in MUI
//todo: default styles MUI in body
//todo: del styles which do not need everywhere
//todo: add palatte => text => default text color
//todo: типизация компонента App с участием типизации с помощью NextPge
//todo: NextImage подгружает разніе размеры под оптимизацию  и адаптив... как их привести в исполнение?!
//todo: в карточке товара не выбирается при первом рендере первый пункт размеров пиццы
//todo: почему при SSR нет фото в network??
//todo: SortCard костыль исправить
//todo: можно ли сразу с fetch next.js диспатчить в стор?
