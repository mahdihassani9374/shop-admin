import React from 'react';
import { BrowserRouter, Switch, Route , HashRouter } from 'react-router-dom';
import { Home, Category, Product, Layout } from './Components'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/product" component={Product}></Route>
          {/* <Route component={NoMatch} /> */}
        </Layout>
      </Switch>
    </HashRouter>


  );
}

export default App;
