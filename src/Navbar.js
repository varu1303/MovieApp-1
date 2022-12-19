import React, { Component } from "react";
import CartList from "./CartList";
import styled from 'styled-components';

const CartImg = styled.img`
height: 48px;
margin-right: 20px;
`

const CartIconContainer = styled.div`
position: relative;
cursor: pointer;
`;

const CartCount = styled.div`
background: orange;
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
`

const Nav = styled.div`
  height: 70px;
  background: #4267b2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`
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
      <Nav>
        {this.state.showCartList && (
          <CartList
            items={cartItems}
            onReset={onResetCart}
            toggleCartList={this.toggleCartList}
          />
        )}
        <CartIconContainer onClick={this.toggleCartList}>
          <CartImg
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <CartCount>{cartItems.length}</CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}


export default Navbar;
