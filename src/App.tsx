import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Category, Product, Layout } from './Components';
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
        <Switch>
          <Layout>
            <Route exact path="/" component={Home}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/product" component={Product}></Route>
            {/* <Route component={NoMatch} /> */}
          </Layout>
        </Switch>
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
