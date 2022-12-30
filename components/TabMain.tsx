import React, { FC, useState } from 'react'
import s from './../styles/tabMain.module.scss';

type PropsType = {
  items: Array<string>
}

const TabMain: FC<PropsType> = ({items}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  
  return (
    <ul className={s.container}>
      <li className={activeItem === null ? s.active : ''} onClick={() => setActiveItem(null)}>Все</li>
      {
       items && items.map((item: string, index) => (
          <li key={index} onClick={()=>setActiveItem(item)} className={activeItem === item ? s.active : ''}>{item}</li>
        ))
      }
    </ul>
  )
}

export default TabMain




// import { Box, Tab, Tabs, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { FC, SyntheticEvent, useState } from 'react';
// import { theme } from '../theme/theme';
// import s from './../styles/tabMain.module.scss'

// interface StyledTabProps {
//   label: string;
// }
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// type PropsType = {
//   items: Array<string>
// }

// // const AntTabs = styled(Tabs)({
// //   //@ts-ignore
// //   // [theme.breakpoints.down('sm')]: {
// //   //   flexDirection: 'column'
// //   // },
// //   marginBottom: '35px',
// //   '& .MuiTabs-indicator': {//indicator under Tabs
// //     backgroundColor: 'transparent',
// //   },
// // });

// // const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
// //   ({ theme }) => ({
// //     fontSize: '16px',
// //     fontWeight: theme.typography.fontWeightMedium,
// //     color: theme.palette.grey[700],
// //     backgroundColor: theme.palette.grey[500],
// //     textTransform: 'none',
// //     borderRadius: '30px',
// //     marginRight: theme.spacing(1),
// //     //@ts-ignore
// //     [theme.breakpoints.down('md')]: {
// //       width: '70px',
// //       fontSize: '12px',
// //       minHeight: '20px',
// //       marginRight: '0'
// //     },
// //      //@ts-ignore
// //     // [theme.breakpoints.down('sm')]: {
// //     //   flexDirection: 'column'
// //     // },
// //     '&.Mui-selected': {
// //       fontWeight: theme.typography.fontWeightMedium,
// //       color: theme.palette.background.paper,
// //       backgroundColor: theme.palette.grey[900],
// //     },
// //   }),
// // );


// function TabPanel(props: TabPanelProps) {
//   const {children, value, index } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const TabMain: FC<PropsType> = ({items}) => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
    
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//               {
//                 items.map((item: string) => (
//                   <div key={item}>
//                       <Tab label={item} {...a11yProps(0)} />
//                  </div>
//                 ))
//               }
//               </Tabs>

//             </Box>
//             <TabPanel value={value} index={0}>
//               Item One
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               Item Three
//             </TabPanel>
  
//     </Box>
//   );
// }

// export default TabMain;
