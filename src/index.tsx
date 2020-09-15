import React from 'react';
import ReactDOM from 'react-dom';
import './Fonts/font-fa.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Theme } from './Theme';

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl'

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});


ReactDOM.render(
  <StylesProvider jss={jss}>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StylesProvider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
