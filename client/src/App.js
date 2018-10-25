import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AllArtists from './components/AllArtists'
import SingleArtist from './components/SingleArtist'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/artists' component={AllArtists} />
          <Route exact path='/artists/:id' component={SingleArtist} />
        </Switch>
      </Router>
    )
  }
}

export default App
