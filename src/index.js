import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Planet from './pages/planet'
import People from './pages/people'
import Home from './pages/home'
import { Provider } from './context'
import Links from './links'

const browserHistory = createBrowserHistory()

const App = () => (
  <Router history={ browserHistory }>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Provider>
        <Route exact path="/planet" component={ Planet } />
        <Route exact path="/people" component={ People } />
      </Provider>
    </Switch>
    <Links />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
