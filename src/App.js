import React, { useContext, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'
import GlobalStyle from './globalStyles'

import { AuthContext } from './context/AuthContext.js'
import LoadingSpinner from './components/ui/LoadingSpinner'

const Users = React.lazy(() => import('./pages/Users'))
const Auth = React.lazy(() => import('./pages/Auth'))
const NewPlace = React.lazy(() => import('./pages/NewPlace'))
const UpdatePlace = React.lazy(() => import('./pages/UpdatePlace'))
const UserPlaces = React.lazy(() => import('./pages/UserPlaces'))

function App() {
  const authCtx = useContext(AuthContext)

  let routes

  if (authCtx.isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlaces} />
        <Route path="/places/new" exact component={NewPlace} />
        <Route path="/places/:placeId" component={UpdatePlace} />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
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
      <main>
        <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
      </main>
    </>
  )
}

export default App
