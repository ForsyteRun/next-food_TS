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
//TODO: fetch запрос каждый раз при переходе на любую старинц...это плохо
//TODO: margin in container
//TODO: поправить вёрстку после data из бека
//TODO:  [theme.breakpoints.down('md')] - key bad reading of TypeScript
//TODO: min 600px how create burger?
//TODO: Tab not in MUI
//TODO: default styles MUI in body
//TODO: del styles which do not need everywhere
//TODO: add palatte => text => default text color
//TODO: типизация компонента App с участием типизации с помощью NextPge
//TODO: NextImage подгружает разніе размеры под оптимизацию  и адаптив... как их привести в исполнение?!
//TODO: в карточке товара не выбирается при первом рендере первый пункт размеров пиццы
//TODO: почему при SSR нет фото в network??
//TODO: SortCard костыль исправить
//TODO: можно ли сразу с fetch next.js диспатчить в стор?
//TODO: в index не приходит Loading: true (init), а зразу false
//TODO: react-select синий цвет при нажати и удерживании
//TODO: react-select типизацыя и анимация
//TODO: ошибки в консоле и в терминале
//TODO: Sceleton ошибка в консоле... no match props server-client
//TODO: как сделать на одно rtkApi и ssr, и filter, и sort?
//TODO: sort=undefined при нетворк в консоле при сортировке
//TODO: двойной вызов редюсеров!!!
//TODO: не индексирует ключи объекта в MainCard...затычка ts-ignore
//TODO: ошибка в консоле по несостыковке пропсов на сервере и вронте из-за скелетона
//TODO: ваш заказ принят в модальном окне и очистка корзины
//TODO: рендер только одной карточки товара при нажатии баттон
//TODO: рендер только типов и размеров при выборе на карте, а не вся карта
//TODO: перевод базы данных на бек - mockApi etc...
//TODO: responsive на малых разрешениях
//TODO: responsive по брейкпоинтах!!!
//TODO: удалить базу данных на клиенте и, соответственно, запуск скриптов
//TODO: перенести входные данные сорт и таб и соответствующий компонент
//TODO: разобратся с запросом на бэк, так как не состыковка поиска, фильтрации, сортировки и пагинации. Не знаю как сделать шаблонную строку всех сразу
//TODO: хук RTK Quary = данные приходят в него после или до stor`a и нужен ли редюсер для ртк
//TODO: убрать дефолтные категории в урле при запросе
//TODO: ddddds
//TODO: fff
