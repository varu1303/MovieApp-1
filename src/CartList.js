import React from "react";

class CartList extends React.Component {
  render() {
    const { items, onReset } = this.props;
    return (
      <div className="cart-list">
        <span>Movies Count: {items.length}</span>
        {items.map((movie) => (
          <div className="item" key={movie.id}>
            <div className="left">
              <img src={movie.Poster} alt={movie.title} />
            </div>
            <div className="right">
              <span>{movie.Title}</span>
              <span>{movie.Plot.substring(0, 75)}...</span>
            </div>
          </div>
        ))}
        <button onClick={onReset}>Reset Cart</button>
      </div>
    );
  }
}

export default CartList;
