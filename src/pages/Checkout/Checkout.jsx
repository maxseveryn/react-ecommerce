import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import GooglePayButton from "@google-pay/button-react";
import ApplePayButton from "apple-pay-button";
import PaymentForm from "../../components/Forms/PaymentForm/PaymentForm";
import ShippingForm from "../../components/Forms/ShippingForm/ShippingForm";

import "./Checkout.css";

export default function Checkout() {
  const cart = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__information">
        <div className="checkout__information--shipping">
          <ShippingForm />
        </div>
        <div className="checkout__information--payment">
          <div className="checkout__information--buttons">
            <GooglePayButton
              className="pay-button"
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "12345678901234567890",
                  merchantName: "MAXYM SEVERYN",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: `${cart.getTotalCost()}`,
                  currencyCode: "USD",
                  countryCode: "UA",
                },
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log("load payment data", paymentRequest);
              }}
            />

            <ApplePayButton className="pay-button" onClick={() => {}} />
          </div>

          <div class="checkout-separator">——— Or pay with card ———</div>

          <PaymentForm />
        </div>
      </div>

      <div className="checkout__cart">
        <h1>Your cart:</h1>
        <ShoppingCart checkout={false} />
      </div>
    </div>
  );
}
