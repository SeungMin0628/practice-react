import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header'
import Home from '../routes/Home'
import TV from '../routes/TV'
import Search from '../routes/Search'
import Detail from 'routes/Detail'
import Collection from 'routes/Collection'

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/show/:id" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/collection/:id" component={Collection} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Router;
