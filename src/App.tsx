import React from 'react';
import Header from './components/pages/header/Header'
import MainPage from './components/pages/mainPage/MainPage.tsx';
import './App.css'
import SignIn from "./components/pages/authorization/SignIn.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "./store.tsx"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ruRU as coreRuRU } from '@mui/material/locale';
import { ruRU as dateRuRU } from '@mui/x-date-pickers/locales';
import CssBaseline from "@mui/material/CssBaseline";







function App() {
  const mode = useSelector((state: RootState) => state.general.mode);
  const theme = createTheme({
        palette: {
            mode,
        },
  }, coreRuRU, dateRuRU);

  const auth = useSelector((state: RootState) => state.general.isAuth)


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {auth ?
            <>
                <Header/>
                <MainPage/>
            </>
            :
            <SignIn/>}

    </ThemeProvider>
  )
}

export default App
