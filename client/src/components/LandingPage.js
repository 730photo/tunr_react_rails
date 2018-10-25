import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Tunr</h1>
        <h3>For all your Tuuns</h3>
        <Link to='/artists'>Go To Artists!</Link>
      </div>
    )
  }
}
