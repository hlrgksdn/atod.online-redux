import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MainMenu from './MainMenu';
import type {RootState} from "../../../store.tsx";
import {useDispatch, useSelector} from "react-redux";
import {generalIsAuthChange, generalModeChange} from "../../generalSlice.ts";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';


export default function Header() {
  const dispatch = useDispatch();
  const mode = useSelector( (state: RootState) => state.general.mode);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const title = useSelector((state: RootState) => state.header.title);




  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const unAuthorizing = () => {
    handleClose();
    dispatch(generalIsAuthChange(false));
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <MainMenu/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
            <div>
              <IconButton onClick={() => dispatch(generalModeChange())}>
                {mode === "light" ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
              </IconButton>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Профиль</MenuItem>
                <MenuItem onClick={handleClose}>Настройки</MenuItem>
                <MenuItem onClick={unAuthorizing}>Выйти</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}