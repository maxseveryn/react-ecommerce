import React, { useState } from "react";
import Payment from "payment";

import "./PaymentForm.css";
import Input from "../../Authentication/Input/Input";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const isCardValid = Payment.fns.validateCardNumber(cardNumber);
  const isExpiryValid = Payment.fns.validateCardExpiry(expiry);
  const isCvcValid = Payment.fns.validateCardCVC(cvc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCardValid && isExpiryValid && isCvcValid) {
      alert("payment data is correct");
    } else {
      alert("payment data incorrect");
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Payment details:</h2>
      <div className="payment-form__inputs">
        <div>
          <Input
            id="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            maxlength="19"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            type="text"
            showToggle={false}
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            // required
          />
        </div>

        <div className="payment-form__row">
          <Input
            id="expiry"
            placeholder="MM/YY"
            maxlength="5"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            autoComplete="cc-exp"
            type="text"
            showToggle={false}
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            // required
          />
          <Input
            id="cvc"
            placeholder="CVC"
            maxlength="4"
            pattern="^\d{3,4}$"
            autoComplete="cc-csc"
            type="text"
            showToggle={false}
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
            // required
          />
        </div>
      </div>

      <button className="payment-form__submit" type="submit">
        Pay
      </button>
    </form>
  );
}
