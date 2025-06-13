import React from "react";
import { useSelector } from "react-redux";

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

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src="/assets/crown.svg" alt="Logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
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
