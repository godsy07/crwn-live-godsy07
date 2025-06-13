import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src="/assets/shopping-bag.svg" alt="Shopping Icon" className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
