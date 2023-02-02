import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../store";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(App);

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
//todo: в index не приходит Loading: true (init), а зразу false
//todo: react-select синий цвет при нажати и удерживании
//todo: react-select типизацыя и анимация
//todo: ошибки в консоле и в терминале
//todo: Sceleton ошибка в консоле... no match props server-client
//todo: как сделать на одно rtkApi и ssr, и filter, и sort?
