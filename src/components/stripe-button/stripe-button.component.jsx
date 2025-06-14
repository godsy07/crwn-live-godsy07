import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { STRIPE_PUBLISHABLE_KEY } from "../../constants";
import { useModal } from "../../context/ModalContext";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const StripeCheckoutButton = ({ price }) => {
  const { alertMessage } = useModal();
  const dispatch = useDispatch();
const navigate = useNavigate();

  const priceForStripe = price * 100;
  const publishableKey = STRIPE_PUBLISHABLE_KEY;

  const onToken = async (token) => {
    console.log(token);
    dispatch(clearCart());
    await alertMessage({
      title: "Payment Successful 🎉",
      message: "Thank you for your purchase!",
      actionText: "Shop More",
      onAction: () => navigate("/shop"),
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce app"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
