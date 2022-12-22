import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBuy from './ButtonBuy';
import { CardDataType } from '../types/types';
import { CardActionArea } from '@mui/material';

type PropsType = {
  card: CardDataType
}

const MainCard: FC<PropsType> = (props) => {
  const {title, img, sets, size, price} = props.card;

  return (
   <Card sx={{ width: 280 }}>
      <CardMedia
        component="img"
        alt="pizza"
        height="260"
        image={img}
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
      </CardContent>
        <CardActions>
          
        </CardActions>
        <CardActions sx={{justifyContent:'space-between'}}>
          {price}
          <ButtonBuy/>
        </CardActions>
    </Card>
  )
}

export default MainCard