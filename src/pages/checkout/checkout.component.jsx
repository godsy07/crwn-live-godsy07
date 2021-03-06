import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header'>
        <span>Product</span>
      </div>
      <div className='header'>
        <span>Description</span>
      </div>
      <div className='header'>
        <span>Quantity</span>
      </div>
      <div className='header'>
        <span>Price</span>
      </div>
      <div className='header'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>

    <div className='test-warning'>
      *Please use the following test credi card for payments*
      <br />
      4242 4242 4242 4242 - Exp: anyfuture date - CVV: any 3 digits
      <br />
      Refer this Link: https://stripe.com/docs/testing
    </div>

    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
