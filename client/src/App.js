import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:movieId" component={Movie}/>}/>
      </div>
    );
  }
}
