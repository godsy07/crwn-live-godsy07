import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { STRIPE_PUBLISHABLE_KEY } from "../../constants";
import { useModal } from "../../context/ModalContext";

const StripeCheckoutButton = ({ price }) => {
  const { alertMessage } = useModal();

  const priceForStripe = price * 100;
  const publishableKey = STRIPE_PUBLISHABLE_KEY;

  const onToken = async (token) => {
    console.log(token);
    await alertMessage({
      title: "Payment Successful 🎉",
      message: "Thank you for your purchase!",
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
