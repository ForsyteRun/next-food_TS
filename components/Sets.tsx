import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

function generate(element: React.ReactElement) {
   return [0, 1, 2].map((value) =>
     React.cloneElement(element, {
       key: value,
     }),
   );
 }

const Sets = () => {
   const [dense, setDense] = React.useState(false);
   const [secondary, setSecondary] = React.useState(false);
 
  return (
   <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
   <Grid container spacing={2}>
     <Grid item xs={12} md={6}>
         <List dense={dense}>
           {generate(
             <ListItem>
               <ListItemText
                 primary="Single-line item"
                 secondary={secondary ? 'Secondary text' : null}
               />
             </ListItem>,
           )}
         </List>
     </Grid>
   </Grid>
 </Box>
  )
}

export default Sets;