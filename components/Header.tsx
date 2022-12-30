import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import logo from './../public/logo.png';
import CartBtn from './CartBtn';

const Header = () => {
  const router = useRouter()

  return (
    <header >
      <Stack direction='row'>
        <Link href='/'>
          <Image
            src={logo}
            alt="logo"
            width={38}
            height={38}
            />
        </Link>
        <Stack sx={{ml: '17px'}}>
          <Typography variant="h1" component="div">REACT PIZZA</Typography>
          <Typography variant="h5" component="div">
            {router.route === '/draw' ? 'всегда выгодные покупки' : 'самая вкусная пицца во вселенной'}
          </Typography>
        </Stack>
      </Stack>
      <Link href={'/draw'}>
        <CartBtn price={55} items={7}/>
      </Link>
    </header>
  )
}

export default Header;