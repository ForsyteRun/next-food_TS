import { Stack, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import {MainCard, SortCard, TabMain} from "../components";
import { CardDataType } from "../types/types";

type PropsType = {
  items: Array<CardDataType>
}

const Home: FC<PropsType> = ({items}) => {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction='row' justifyContent='space-between' mb='32px'>
        <TabMain items={['Мясные', 'Вегетарианские', 'Открытые', 'Закрытые']} />
        <SortCard/>
      </Stack>
      <Typography variant="h2" component="div" mb='35px'>Все пиццы</Typography> 
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between' rowGap={8.125}>
        {items.map((card: CardDataType) => {
          return <MainCard card={card} key={card.id} />;
        })}
      </Stack>
    </>
  );
};

export default Home;
