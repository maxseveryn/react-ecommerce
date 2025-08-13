import React from "react";
import Input from "../../Authentication/Input/Input";
import "./ShippingForm.css";

export default function ShippingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2>Shipping information:</h2>

      <div className="shipping-form__inputs">
        <label className="form-label" htmlFor="email">
          Contact Email:
        </label>
        <Input
          id="email"
          placeholder="yourEmail@email.com"
          autocomplete="email"
          type="email"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="firstName">
          First Name:
        </label>
        <Input
          id="firstName"
          placeholder="Maxym"
          autocomplete="firstName"
          type="text"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="secondName">
          Second Name:
        </label>
        <Input
          id="secondName"
          placeholder="Severyn"
          autocomplete="secondName"
          type="text"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="firstAddress">
          Adress line 1:
        </label>
        <Input
          id="firstAddress"
          placeholder="9045 Green St"
          autocomplete="address"
          type="text"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="secondAdress">
          Adress line 2 (optional):
        </label>
        <Input
          id="secondAddress"
          placeholder="4590 Black St"
          autocomplete="address"
          type="text"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="city">
          City:
        </label>
        <Input
          id="city"
          autocomplete="city"
          type="text"
          placeholder="Kyiv"
          showToggle={false}
          // required
        />
        <label className="form-label" htmlFor="zip">
          Zip-code:
        </label>
        <Input
          id="zip"
          autocomplete="zip"
          type="text"
          placeholder="12345"
          showToggle={false}
          // required
        />
      </div>
    </form>
  );
}
