// import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        {/*<ThemeProvider theme={darkTheme}>*/}
        {/*  <CssBaseline/>*/}
          <App />
        {/*</ThemeProvider>*/}
    </Provider>
  </React.StrictMode>,
)
