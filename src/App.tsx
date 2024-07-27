import Header from './components/pages/header/Header'
import './App.css'
import SignIn from "./components/pages/authorization/SignIn.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "./store.tsx"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";






function App() {
  const mode = useSelector((state: RootState) => state.general.mode);
  const theme = createTheme({
        palette: {
            mode,
        },
  });

  const auth = useSelector((state: RootState) => state.general.isAuth)


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {auth ?
            <>
                <Header/>
            </>
            :
            <SignIn/>}

    </ThemeProvider>
  )
}

export default App
