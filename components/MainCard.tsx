import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC, useMemo, useState } from "react";
import { theme } from "../theme/theme";
import { CardDataType } from "../types/types";
import s from './../styles/MainCard.module.scss';
import ButtonBuy from "./ButtonBuy";
import cn from 'classnames';
import Image from "next/image";
import { useActions } from "../hooks/useActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { AnyNsRecord } from "dns";

type PropsType = {
  card: CardDataType;
  selectedPizzas: (card: CardDataType) => void
  dispatch: ((el: any) => void)
}

const MainCard: FC<PropsType> = ({card, selectedPizzas, dispatch}) => {
  const { imageUrl, price, name, types, sizes, id } = card;
  const [set, setSet] = useState<number>(types[0])
  const [sizesItem, setSizesItem] = useState<number>(sizes[0])
    
  const availableSets = ['тонкое', 'традиционное']
  const availableSizes = [26, 30, 40]
  
  const onSelectSets = (index: number) => {
    setSet(index)
  }

  const onSelectSizes = (index: number) => {
    setSizesItem(index)
  }

  const countPizzas = (card: CardDataType) => {
    dispatch(selectedPizzas(card))
}

  return (
    <Card sx={{ width: 280, boxShadow:'none' }}>
      <Image src={imageUrl} alt='pizza' 
      width={260} height={260} priority quality={100}
      sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
      className = {s.img}
      />
      <CardContent sx={{pb: 0}}>
        <Typography gutterBottom variant="h3" component="div" sx={{textAlign: 'center', height: '55px', mb: 0}}>
          {name}
        </Typography>
      </CardContent>
      <Stack className={s.mainContainer} bgcolor={theme.palette.grey[300]}>
          <Stack className={s.setConteiner}>
            {availableSets.map((el: string, index) => (
              <Typography 
              key={el} 
              variant="h6" 
              component="div" 
              className={cn(s.topSet, set === index && s.active, !types.includes(index) && s.disabled )}
              onClick={()=>onSelectSets(index)}
              >
              {el} 
              </Typography>
            ))}
          </Stack>
          <Stack className={s.setConteiner}>
            {availableSizes.map((el: number, index: number) => (
              <Typography 
              key={el} 
              variant="h6" 
              component="div" 
              className={cn(s.topSet, sizesItem === index && s.active, !sizes.includes(el) && s.disabled )}
              onClick={()=>onSelectSizes(index)}
              >
              {el} см
              </Typography>
            ))}
          </Stack>
      </Stack>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h3" component="div">
        от {price}<span>&#36;</span>
        </Typography>
        <ButtonBuy onClickPizza ={() => countPizzas(card)} />
      </CardActions>

    </Card>
  );
};

export default MainCard;
