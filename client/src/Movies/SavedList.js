import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.title} className="saved-movie">{movie.title}</span>
        ))}
        <NavLink to="/" activeClassName="activeNavButton">
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
