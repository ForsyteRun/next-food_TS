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

type PropsType = {
  card: CardDataType;
};

const MainCard: FC<PropsType> = (props) => {
  const { title, img, sets, size, price } = props.card;
  const [set, setSet] = useState(0)
  const [sizes, setSizes] = useState(0)
  
  return (
    <Card sx={{ width: 280, boxShadow:'none' }}>
      <CardMedia
        component="img"
        alt="pizza"
        height="260"
        image={img}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{textAlign: 'center'}}>
          {title}
        </Typography>
      </CardContent>
      <Stack className={s.mainContainer} bgcolor={theme.palette.grey[300]}>
          <Stack className={s.setConteiner}>
            {sets.map((el: string, index) => (
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
            {size.map((el: string, index) => (
              <Typography 
              key={el} 
              variant="h6" 
              component="div" 
              className={cn(sizes === index ? s.active : '', s.topSet)}
              onClick={()=>setSizes(index)}
              >
              {el}
              </Typography>
            ))}
          </Stack>
      </Stack>
      <CardActions sx={{ justifyContent: "space-between" }}>
        {price}
        <ButtonBuy />
      </CardActions>
    </Card>
  );
};

export default MainCard;
