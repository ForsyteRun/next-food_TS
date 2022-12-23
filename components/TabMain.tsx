import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SyntheticEvent, useState } from 'react';
import { theme } from '../theme/theme';
import s from './../styles/tabMain.module.scss'

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  //@ts-ignore
  // [theme.breakpoints.down('sm')]: {
  //   flexDirection: 'column'
  // },
  marginBottom: '35px',
  '& .MuiTabs-indicator': {//indicator under Tabs
    backgroundColor: 'transparent',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: '16px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[500],
    textTransform: 'none',
    borderRadius: '30px',
    marginRight: theme.spacing(1),
    //@ts-ignore
    [theme.breakpoints.down('md')]: {
      width: '70px',
      fontSize: '12px',
      minHeight: '20px',
      marginRight: '0'
    },
     //@ts-ignore
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column'
    // },
    '&.Mui-selected': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.grey[900],
    },
  }),
);

const TabMain = () => {
  const [value, setValue] = useState<number>(0);
  //@ts-ignore
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" >
          <AntTab label="Все" />
          <AntTab label="Мясные" />
          <AntTab label={matches ? "Вегетарианская" : "Вегaн"} />
          <AntTab label="Гриль" />
          <AntTab label="Острые" />
          <AntTab label="Закрытые" />
        </AntTabs>
    </>
  )
}

export default TabMain;
