import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cards from "./Cards"
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input1 from "./Input1"
import Badge from '@mui/material/Badge';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
const [count, setcount] = useState(0)
const details=[{Name:"Mngemnet", discription:"nothing"},{Name:"Salse", discription:"nothing"},{Name:"Operations", discription:"nothing"},{Name:"Human Resorce", discription:"nothing"},{Name:"Finace", discription:"nothing"},{Name:"Custumer Servies", discription:"nothing"}]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
     <h3>My Task</h3>
        <Toolbar />
        <Divider />
        <List>
          {['Mngemnet', 'Salse',"Operations","Markiting","Human Resorce","Finace","Custumer Servies"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
              <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Input1 size="large"></Input1>
        <Toolbar />
        <Typography paragraph>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {details.map((items, index) => (
          <Grid  xs={2} sm={4} md={4} key={index}>
          <Cards Name={items.Name} discription={items.discription}></Cards>
          </Grid>
        ))}
      </Grid>
      </Box> 
        </Typography>
      </Box>
    </Box>
  );
}
