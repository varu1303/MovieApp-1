import React, { Component } from "react";
import CartList from "./CartList";
import styles from './nav.module.css';


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
      <div className={styles.nav}>
        {this.state.showCartList && (
          <CartList
            items={cartItems}
            onReset={onResetCart}
            toggleCartList={this.toggleCartList}
          />
        )}
        <div className={styles.cartIconContainer} onClick={this.toggleCartList}>
          <img
            className={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span className={styles.cartCount}>{cartItems.length}</span>
        </div>
      </div>
    );
  }
}


export default Navbar;
