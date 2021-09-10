import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'
import GlobalStyle from './globalStyles'
import Auth from './pages/Auth'
import NewPlace from './pages/NewPlace'
import UpdatePlace from './pages/UpdatePlace'
import UserPlaces from './pages/UserPlaces'
import Users from './pages/Users'
import Homepage from './pages/Homepage'

import { AuthContext } from './context/AuthContext.js'

function App() {
  const authCtx = useContext(AuthContext)

  let routes

  if (authCtx.isAuth) {
    routes = (
      <Switch>
        <Route path="/home" exact component={Homepage} />
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlaces} />
        <Route path="/places/new" exact component={NewPlace} />
        <Route path="/places/:placeId" component={UpdatePlace} />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/home" exact component={Homepage} />
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlaces} />
        <Route path="/auth" exact component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{routes}</main>
    </>
  )
}

export default App
