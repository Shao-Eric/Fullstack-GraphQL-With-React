import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    console.log(this.props);

    const { song } = this.props.data;
    // check if song exist or check loading property
    if (!song) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

//pass the props.param.id to the fetchSong query to fetch a specific song
export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
