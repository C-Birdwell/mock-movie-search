import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { Header } from '../components'

import { DashboardPage, AboutPage, NotFoundPage } from '../screens'

const AppRouter = () => (
  <BrowserRouter>
    <div className="screen">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter
