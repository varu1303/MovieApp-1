import React, { Component } from "react";
import MovieList from "./Movielist";
import Navbar from "./Navbar";

import { data } from "./data";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data,
      cartItems: [],
    };
  }

  handleAddStars = (movieId) => {
    const updatedMovies = this.state.movies.map((movie) => {
      if (movie.id === movieId && movie.Stars < 5) {
        movie.Stars += 0.5;
      }
      return movie;
    });
    this.setState({ movies: updatedMovies });
  };

  handleDecStars = (movieId) => {
    const updatedMovies = this.state.movies.map((movie) => {
      if (movie.id === movieId && movie.Stars > 0) {
        movie.Stars -= 0.5;
      }
      return movie;
    });
    this.setState({ movies: updatedMovies });
  };

  handleToggleFav = (movieId) => {
    const updatedMovies = this.state.movies.map((movie) => {
      if (movie.id === movieId) {
        movie.Favourite = !movie.Favourite;
      }
      return movie;
    });
    this.setState({ movies: updatedMovies });
  };

  handleResetCart = () => {
    this.setState({ cartItems: [] });
  };

  handleAddToCart = (movie) => {
    this.setState((prev) => ({ cartItems: [...prev.cartItems, movie] }));
  };
  handleRemoveFromCart = (movie) => {
    const updatedCartItems = this.state.cartItems.filter(
      (item) => item.id !== movie.id
    );
    this.setState({ cartItems: updatedCartItems });
  };
  getTotal = () => {
    let total = 0;
    if (!this.state.cartItems.length) return 0;
    this.state.cartItems.forEach((item) => {
      total += item.Price;
    });

    return total;
  };

  render() {
    return (
      <div className="App">
        <Navbar
          cartItems={this.state.cartItems}
          onResetCart={this.handleResetCart}
        />
        <MovieList
          cartItems={this.state.cartItems}
          movies={this.state.movies}
          onAddStars={this.handleAddStars}
          onDecStars={this.handleDecStars}
          onToggleFav={this.handleToggleFav}
          onAddToCart={this.handleAddToCart}
          onRemoveFromCart={this.handleRemoveFromCart}
        />
        <div className="checkout">
          <span>Movies Count: {this.state.cartItems.length}</span>
          <span>
            Total Cost: <strong>₹{this.getTotal()}</strong>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
