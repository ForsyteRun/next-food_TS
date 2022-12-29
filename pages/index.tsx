import { Stack, Typography } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { cardData } from "../assets/data/card";
import {MainCard, SortCard, TabMain} from "../components";
import { CardDataType } from "../types/types";

const Home = () => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction='row' justifyContent='space-between'>
        <TabMain items={['Мясные', 'Вегетарианские', 'Открытые', 'Закрытые']} />
        <SortCard/>
      </Stack>
      <Typography variant="h2" component="div" mb='35px'>Все пиццы</Typography> 
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between' rowGap={8.125}>
        {cardData.map((card: CardDataType) => {
          return <MainCard card={card} key={card.id} />;
        })}
      </Stack>
    </>
  );
};

export default Home;
