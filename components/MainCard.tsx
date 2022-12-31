import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { theme } from "../theme/theme";
import { CardDataType } from "../types/types";
import s from './../styles/MainCard.module.scss';
import ButtonBuy from "./ButtonBuy";
import cn from 'classnames';
import Image from "next/image";

type PropsType = {
  card: CardDataType;
};

const MainCard: FC<PropsType> = (props) => {
  const { imageUrl, price, id, name, types, sizes } = props.card;
  const [set, setSet] = useState(0)
  const [sizesItem, setSizesItem] = useState(0)
  
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
            {types.map((el: number, index) => (
              <Typography 
              key={el} 
              variant="h6" 
              component="div" 
              className={cn(set === index ? s.active : '', s.topSet)}
              onClick={()=>setSet(index)}
              >
              {el} 
              </Typography>
            ))}
          </Stack>
          <Stack className={s.setConteiner}>
            {sizes.map((el: number, index) => (
              <Typography 
              key={el} 
              variant="h6" 
              component="div" 
              className={cn(sizesItem === index ? s.active : '', s.topSet)}
              onClick={()=>setSizesItem(index)}
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
        <ButtonBuy />
      </CardActions>

    </Card>
  );
};

export default MainCard;
