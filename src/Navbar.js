import React, { Component } from "react";
import CartList from "./CartList";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showCartList: false };
  }

  toggleCartList = () => {
    this.setState({ showCartList: !this.state.showCartList });
  };

  render() {
    const { cartItems, onResetCart } = this.props;

    return (
      <div className="nav">
        {this.state.showCartList && (
          <CartList
            items={cartItems}
            onReset={onResetCart}
            toggleCartList={this.toggleCartList}
          />
        )}
        <div className="cartIconContainer" onClick={this.toggleCartList}>
          <img
            className="cartIcon"
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span className="cartCount">{cartItems.length}</span>
        </div>
      </div>
    );
  }
}


export default Navbar;
