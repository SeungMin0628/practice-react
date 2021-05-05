import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header'
import Home from '../routes/Home'
import TV from '../routes/TV'
import Search from '../routes/Search'
import Detail from 'routes/Detail'

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/show/:id" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Router;
