import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'





export default class SingleArtist extends Component {
  state = {
    artist: {},
    songs: []
  }

  async componentDidMount() {
    const artistId = this.props.match.params.id

    const artist = await this.fetchOneArtist(artistId)
    const songs = await this.fetchSongs(artistId)

    this.setState({ artist, songs })
  }

  fetchOneArtist = async (id) => {
    const response = await axios.get(`/api/artists/${id}`)
    return response.data
  }

  fetchSongs = async (id) => {
    const response = await axios.get(`/api/artists/${id}/songs`)
    return response.data
  }

  render() {
    console.log('Rendering')
    const artist = this.state.artist

    const songContent = this.state.songs.map((song, i) => {
      return (
        <div>
          <h4>{song.title} ({song.album})</h4>
          {song.preview_url ?
            <audio controls>
              <source src={song.preview_url} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio> :
            "No Audio Content"}
        </div>
      )
    })

    return (
      <div>
        <h1>{artist.name} ({artist.nationality})</h1>
        <div>
          <img width={200} src={artist.photo_url} alt={artist.name} />
        </div>
        <Link to='/artists'>Go Back to All Artists</Link>
        {songContent}
      </div>
    )
  }
}