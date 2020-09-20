import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Category, Product, Layout } from './Components';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const App = () => {

  const [open, setOpen] = useState<boolean>(true);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, [])

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
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

  );
}

export default App;
