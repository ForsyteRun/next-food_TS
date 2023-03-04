import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { store } from '../redux/store'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
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
//todo: sort=undefined при нетворк в консоле при сортировке
//todo: двойной вызов редюсеров!!!
//todo: не индексирует ключи объекта в MainCard...затычка ts-ignore
//todo: ошибка в консоле по несостыковке пропсов на сервере и вронте из-за скелетона
//todo: ваш заказ принят в модальном окне и очистка корзины
//todo: рендер только одной карточки товара при нажатии баттон
//todo: рендер только типов и размеров при выборе на карте, а не вся карта
//todo: перевод базы данных на бек - mockApi etc...
//todo: responsive на малых разрешениях
//todo: responsive по брейкпоинтах!!!
//todo: удалить базу данных на клиенте и, соответственно, запуск скриптов
//todo: перенести входные данные сорт и таб и соответствующий компонент
//todo: разобратся с запросом на бэк, так как не состыковка поиска, фильтрации, сортировки и пагинации. Не знаю как сделать шаблонную строку всех сразу
