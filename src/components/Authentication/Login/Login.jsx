import React from "react";
import Input from "../Input/Input.jsx";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="auth-block" onSubmit={handleSubmit}>
      <Input id="email" placeholder="E-mail" type="email" required />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        showToggle={true}
        required
      />
      <div className="auth-block__terms">
        <p className="auth-block__terms__text">
          By clicking "Login", you accept the
        </p>
        <a
          className="auth-block__terms__link"
          href="https://github.com/maxseveryn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of the Public Agreement (Offer) for the provision of services
        </a>
      </div>
      <button type="submit" className="auth-button">
        Login
      </button>

      <p className="separator">or</p>

      <div className="auth-block__social">
        <Link className="social__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M4.75 3.748a2.554 2.554 0 0 1 3.612 0l1.206 1.206c.815.815.778 2.107-.088 2.973l-.84.84h-.002a.27.27 0 0 0-.065.294 12.5 12.5 0 0 0 2.605 3.76 12.5 12.5 0 0 0 3.76 2.609.27.27 0 0 0 .295-.068l.928-.927a2.04 2.04 0 0 1 2.885 0l1.205 1.204a2.554 2.554 0 0 1 0 3.612l-.669.668c-.884.885-2.153 1.246-3.394 1.012v-.001c-2.796-.529-5.822-2.143-8.399-4.72-2.576-2.575-4.19-5.603-4.72-8.398-.233-1.242.127-2.51 1.011-3.394zm2.905.707a1.555 1.555 0 0 0-2.199 0l-.668.67c-.638.637-.912 1.565-.736 2.501.486 2.572 1.99 5.422 4.445 7.877s5.306 3.958 7.877 4.444c.936.177 1.864-.098 2.501-.735l.67-.668a1.554 1.554 0 0 0 0-2.198l-1.206-1.204a1.04 1.04 0 0 0-1.47-.001h-.001l-.927.928h-.001a1.27 1.27 0 0 1-1.404.275 13.5 13.5 0 0 1-4.065-2.816 13.5 13.5 0 0 1-2.813-4.063 1.27 1.27 0 0 1 .274-1.405l.84-.84.09-.098c.417-.496.363-1.096-.001-1.46z"></path>
          </svg>
          Continue with phone number
        </Link>
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

      <Link className="auth-block__link">Reset password</Link>
      <Link className="auth-block__link">Can't login? </Link>
    </form>
  );
}
