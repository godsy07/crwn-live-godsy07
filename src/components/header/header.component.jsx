import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { setCurrentUser } from "../../redux/user/user.actions";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const handleSignOut = async () => {
    await auth.signOut();
    dispatch(setCurrentUser(null));
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src="/assets/crown.svg" alt="Logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={handleSignOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
