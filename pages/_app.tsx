import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { CardDataType } from '../types/types'
import { Provider } from 'react-redux'
import { store } from '../store'
interface Props {
  items?: Array<CardDataType>
}

const App = ({ Component, pageProps, items}: AppProps & Props)  => {
  
  return (
    <Provider store={store}>
      <Layout items={items}>
        <Component {...pageProps} items={items}/>
      </Layout>
    </Provider>
  ) 
}

export default App;

App.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/db.json')
  const json = await res.json()
  return { items: json.pizzas }
}

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


