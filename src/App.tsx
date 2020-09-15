import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Category, Product, Layout } from './Components'

const App = () => {
  return (
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


  );
}

export default App;
