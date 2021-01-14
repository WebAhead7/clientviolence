import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'
import StartTest from './pages/StartTest'
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
          <Route exact path='/starttest'>
            <StartTest />
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
