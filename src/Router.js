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

const Router = () => {
  return (
    <div>
      <h1>Hello Router</h1>
      <Home />
      <StartTest />
    </div>
  )
}

export default Router
