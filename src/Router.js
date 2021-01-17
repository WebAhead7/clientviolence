import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'
import Test from './pages/Test'
import Home from './pages/Home'
import DevComponent from './components/Devcomponent'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <h1>Hello Router</h1>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/test'>
            <Test />
          </Route>
          <Route exact path='/dev'>
            <DevComponent />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
