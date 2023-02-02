import { Stack, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { pizzaApi, useGetAllPizzasQuery } from "../api/pizzas.api";
import { MainCard, SortBy, TabMain } from "../components";
import { AppState, AppStore, wrapper } from "../store";
import { CardDataType } from "../types/types";
import { useAppSelector} from "../store/hooks";

const tabMenuItems = ['Мясные', 'Вегетарианские', 'Открытые', 'Закрытые']
const itemsSort = [
  {value: 'rating', label: 'популярности', id: 0},
  {value: 'price', label: 'цене', id: 1},
  {value: 'name', label: 'алфавиту', id: 2},
]

const Home = () => {
  const {tabPizzas} = useAppSelector((state: AppState) => state.getFilterTab)
  const {sortBy} = useAppSelector((state: AppState) => state.sortBy)

  const {data} = useGetAllPizzasQuery(tabPizzas, sortBy)
  console.log(sortBy)
  
  return (
    <>
      <Head>
        <title>NextBoots</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction='row' justifyContent='space-between' mb='32px'>
        <TabMain 
          items={tabMenuItems} 
          />
        <SortBy itemsSort={itemsSort} />
      </Stack>
      <Typography variant="h2" component="div" mb='35px'>Все пиццы</Typography> 
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between' rowGap={8.125}>
        {data 
        &&
          data.map((card: CardDataType) => {
            return <MainCard card={card} key={card.id} />
          })
        }
      </Stack>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store: AppStore) => async ( ) => {

    await store.dispatch(pizzaApi.endpoints.getAllPizzas.initiate())
  return {
    props: {

    }}
})



