import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Category, Product, Login } from './Components';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const App = ({ Loading }: any) => {
  const classes = useStyles();

  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/product" component={Product}></Route>
      </BrowserRouter>
      <Backdrop className={classes.backdrop} open={Loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  Loading: state.Loading
})


export default connect(mapStateToProps)(App);
