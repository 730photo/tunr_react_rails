import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllArtists extends Component {
  state = {
    artists: []
  }

  async componentDidMount() {
    await this.fetchArtists()
  }

  fetchArtists = async () => {
    const response = await axios.get('/api/artists')
    this.setState({ artists: response.data })
  }

  render() {
    const artistContent = this.state.artists.map((artist, i) => {
      return (
        <div key={i}>
          <img width={200} src={artist.photo_url} alt={artist.name} />
          <div><Link to={`/artists/${artist.id}`}>{artist.name}</Link> - {artist.nationality}</div>
        </div>
      )
    })

    return (
      <div>
        <h1>All Artists</h1>
        {artistContent}
        <Link to='/artists/1'>Go To An Artist</Link>
      </div>
    )
  }
}
