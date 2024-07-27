import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useDispatch} from "react-redux";
import {headerTitleChange} from "./headerSlice.tsx";

import type {AppDispatch} from "../../../store.tsx";0

const mainSections: string[] = [
  'Главная страница',
  'Статистика',
  'Журнал инкассаций',
  'Карты клиента'
]

const secondarySections: string[] = [
  'Контроль оборудования',
  'Документация'
]

export default function MainMenu() {
  const [open, setOpen] = React.useState(false);
    const dispatch: AppDispatch = useDispatch();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const changePage = (event: React.MouseEvent<HTMLElement>) => {
      dispatch(headerTitleChange(event.currentTarget.innerText));
      toggleDrawer(false)
  }



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {mainSections.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={event => changePage(event)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondarySections.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={event => changePage(event)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        Version: {import.meta.env.VITE_APP_VERSION}
    </Box>
  );

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                setOpen(!open)
            }}
          >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}