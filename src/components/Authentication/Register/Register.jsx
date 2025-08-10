import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import BasicModal from "../../Modal/Modal.jsx";
import { Link } from "react-router-dom";

export default function Register() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = true;

    if (success) {
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <form className="auth-block" onSubmit={handleSubmit}>
      <Input id="firstName" placeholder="First Name" type="text" required />
      <Input id="secondName" placeholder="Last Name" type="text" required />
      <Input id="email" placeholder="E-mail" type="email" required />
      <Input
        id="password"
        placeholder="New password"
        type="password"
        showToggle={true}
        required
      />
      <Input
        id="email"
        placeholder="Repeat password"
        type="email"
        showToggle={true}
        required
      />
      <div className="auth-block__terms">
        <p className="auth-block__terms__text">
          By clicking "Register", you accept the
        </p>
        <a
          className="auth-block__terms__link"
          href="https://github.com/maxseveryn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use of the site
        </a>
      </div>
      <button type="submit" className="auth-button">
        Register
      </button>
      <p className="separator">or</p>
      <div className="auth-block__social">
        <a className="social__button" href="https://facebook.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <g id="logos:facebook">
              <g id="Group 3">
                <path
                  id="Vector"
                  fill="#1877F2"
                  d="M21.6 12a9.6 9.6 0 1 0-11.1 9.483v-6.708H8.062V12H10.5V9.885c0-2.406 1.433-3.735 3.626-3.735 1.05 0 2.149.187 2.149.187V8.7h-1.21c-1.193 0-1.565.74-1.565 1.5V12h2.662l-.425 2.775H13.5v6.708c4.59-.72 8.1-4.691 8.1-9.483"
                ></path>
                <path
                  id="Vector_2"
                  fill="#fff"
                  d="M15.737 14.775 16.163 12H13.5v-1.8c0-.76.372-1.5 1.565-1.5h1.21V6.337s-1.099-.187-2.149-.187c-2.193 0-3.626 1.329-3.626 3.735V12H8.063v2.775H10.5v6.708a9.7 9.7 0 0 0 3 0v-6.708z"
                ></path>
              </g>
            </g>
          </svg>
          Continue with Facebook
        </a>
        <a className="social__button" href="https://google.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <g id="Frame 34307">
              <g id="Group 2" fill-rule="evenodd" clip-rule="evenodd">
                <path
                  id="Vector"
                  fill="#4285F4"
                  d="M20.59 11.698a11 11 0 0 0-.203-1.82h-8.69v3.437h4.952a4.15 4.15 0 0 1-1.82 2.83v2.223h3.032a8.8 8.8 0 0 0 2.729-6.67"
                ></path>
                <path
                  id="Vector_2"
                  fill="#34A853"
                  d="M11.696 20.59a9 9 0 0 0 6.165-2.222l-3.031-2.224a5.96 5.96 0 0 1-3.132.81 5.66 5.66 0 0 1-5.256-3.74H3.41v2.324a9.2 9.2 0 0 0 8.286 5.052"
                ></path>
                <path
                  id="Vector_3"
                  fill="#FBBC05"
                  d="M6.442 13.213a9 9 0 0 1-.202-1.716 9 9 0 0 1 .201-1.719V7.453h-3.03A8.9 8.9 0 0 0 2.4 11.495a8.9 8.9 0 0 0 1.01 4.043z"
                ></path>
                <path
                  id="Vector_4"
                  fill="#EA4335"
                  d="M11.696 6.039a5.15 5.15 0 0 1 3.538 1.314l2.628-2.628A9.1 9.1 0 0 0 11.695 2.4a9.2 9.2 0 0 0-8.286 5.052L6.44 9.778a5.66 5.66 0 0 1 5.256-3.74"
                ></path>
              </g>
            </g>
          </svg>
          Continue with Google
        </a>
      </div>
      <Link className="auth-block__link">Can't register?</Link>
      <BasicModal open={modalOpen} onClose={handleClose} />
    </form>
  );
}
