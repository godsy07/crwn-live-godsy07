import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header">
          <span>Product</span>
        </div>
        <div className="header">
          <span>Description</span>
        </div>
        <div className="header">
          <span>Quantity</span>
        </div>
        <div className="header">
          <span>Price</span>
        </div>
        <div className="header">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="checkout-div">
          <div>No Products exist in the cart.</div>
        </div>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      )}
      <div className="total">TOTAL: ${total}</div>

      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: any 3 digits
        <br />
        Refer this Link:{" "}
        <a
          href="https://stripe.com/docs/testing"
          target="_blank"
          rel="noreferrer"
        >
          https://stripe.com/docs/testing
        </a>
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
