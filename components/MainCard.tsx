import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import cn from 'classnames';
import Image from "next/image";
import { FC, useState } from "react";
import { AppState } from "../store";
import { useAppSelector } from "../store/hooks";
import { addPizzas } from "../store/redusers/selectedPizzas";
import { theme } from "../theme/theme";
import { CardDataType, shortCardDataType } from "../types/types";
import s from './../styles/MainCard.module.scss';
import ButtonBuy from "./ButtonBuy";

type PropsType = {
  card: CardDataType;
  availableSets: Array<string>
  availableSizes: Array<number>

  selectedPizzas: (card: shortCardDataType) => void
  dispatch: ((el: any) => void)
}

const MainCard: FC<PropsType> = ({card, availableSets, availableSizes,  selectedPizzas, dispatch}) => {
  const { imageUrl, price, name, types, sizes, id } = card;

  const [set, setSet] = useState<number>(0)
  const [sizesItem, setSizesItem] = useState<number>(0)
  
  const {items} = useAppSelector((state: AppState) => state.selectedPizzas)
  
  const onSelectSets = (index: number) => {
    setSet(index)
  }

  const onSelectSizes = (index: number) => {
    setSizesItem(index)
  }

  const addPizzaToCart = ({id, name, imageUrl, price}: CardDataType) => {
    let obj = {
      id,
      name,
      price,
      img: imageUrl,
      size: availableSizes[sizesItem],
      type: availableSets[set]
    }
    dispatch(addPizzas(obj))
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
        <ButtonBuy onClickPizza ={() => addPizzaToCart(card)} 
        //@ts-ignore
        countItem={items[id] && items[id].items.length} />
      </CardActions>

    </Card>
  );
};

export default MainCard;
