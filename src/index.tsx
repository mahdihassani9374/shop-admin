import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Fonts/font-fa.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Theme } from './Theme';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';
import reducer from './Utilitis/reducer';
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"


const store = createStore(reducer, applyMiddleware(thunk));

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
