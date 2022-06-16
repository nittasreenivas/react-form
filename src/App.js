import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handlePhoneNumberInputChange = (event) => {
    setValues({ ...values, phonenumber: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.phonenumber
    ) {
      setValid(true);
    }

    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          id="last-name"
          value={values.lastName}
          onChange={handleLastNameInputChange}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          id="email"
          value={values.email}
          onChange={handleEmailInputChange}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="last-name-error">Please enter a Email address </span>
        ) : null}
        <input
          id="password"
          value={values.password}
          onChange={handlePasswordInputChange}
          class="form-field"
          type="password"
          placeholder="Password"
          name="password"
        />
        {submitted && !values.password ? (
          <span id="last-name-error">Please enter a Password</span>
        ) : null}
        <input
          id="phonenumber"
          value={values.phonenumber}
          onChange={handlePhoneNumberInputChange}
          class="form-field"
          type="text"
          placeholder="phonenumber"
          name="phonenumber"
        />
        {submitted && !values.phonenumber ? (
          <span id="last-name-error">Please enter a valid Phonenumber</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
