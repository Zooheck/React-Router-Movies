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
    const movieTitles = savedList.map(item => item.title)
    if (!movieTitles.includes(movie.title)) {
      savedList.push(movie)
      this.setState({ savedList });
    }
    // savedList.push(movie);
    
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:movieId" render={props => <Movie {...props} addToSavedList={this.addToSavedList}/>}/>}/>
      </div>
    );
  }
}
