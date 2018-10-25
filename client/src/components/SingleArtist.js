import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SingleArtist extends Component {
  render() {
    return (
      <div>
        <h1>Single Artist</h1>
        <h3>ID : {this.props.match.params.id}</h3>
        <Link to='/artists'>Go Back to All Artists</Link>
      </div>
    )
  }
}
