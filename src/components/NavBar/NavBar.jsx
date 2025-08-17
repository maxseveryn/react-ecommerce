import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";

import { SunIcon, MoonIcon } from "lucide-react";

import ShoppingCart from "../../components/ShoppingCart/ShoppingCart.jsx";
import "./NavBar.css";
import DarkLogo from "../../assets/dark_logo.png";
import LightLogo from "../../assets/light_logo.png";
import { CartContext } from "../../context/cartContext.js";
import { ThemeContext } from "../../context/ThemeProvider.js";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const { getTotalQuantity } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutsideDropdown(event) {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    function handleClickOutsideMenu(event) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="container-wrapper">
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__brand">
          <Link to="/" aria-label="Home">
            <img
              className="brand__logo"
              src={theme === "dark" ? LightLogo : DarkLogo}
              alt="Shop logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div
          className={`navbar__menu${isMenuOpen ? " open" : ""}${
            scrolled ? " scrolled" : ""
          }`}
          ref={menuRef}
          aria-expanded={isMenuOpen}
          aria-label="Main menu"
        >
          <ul className="navbar__links">
            <li className="link__item">
              <Link to="/new" tabIndex="0">
                New
              </Link>
            </li>
            <li className="link__item">
              <Link to="/sales" tabIndex="0">
                Sales
              </Link>
            </li>
            <li className="link__item">
              <Link to="/partnership" tabIndex="0">
                Partnership
              </Link>
            </li>
          </ul>
          <div className={`navbar__find ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar__dropdown" ref={dropdownRef}>
              <div
                className="navbar__dropdown-toggle"
                onClick={toggleDropdown}
                tabIndex="0"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="dropdown-menu"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleDropdown();
                }}
              >
                <span className="navbar__dropdown-label">All products</span>
                <button
                  className="navbar__button dropdown__button"
                  aria-label="Toggle clothes categories"
                  tabIndex="-1"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <svg
                    className="button-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="dropdown-menu"
                role="menu"
                aria-labelledby="dropdown-menu"
                className={`navbar__dropdown-content ${
                  isDropdownOpen ? "open" : ""
                }`}
              >
                <p className="dropdown__item" role="menuitem" tabIndex="0">
                  Women clothes
                </p>
                <p className="dropdown__item" role="menuitem" tabIndex="0">
                  Man clothes
                </p>
                <p className="dropdown__item" role="menuitem" tabIndex="0">
                  Child clothes
                </p>
                <p className="dropdown__item" role="menuitem" tabIndex="0">
                  For house
                </p>
                <p className="dropdown__item" role="menuitem" tabIndex="0">
                  Health
                </p>
              </div>
            </div>

            <div className="navbar__input">
              <form role="search" aria-label="Site search">
                <input
                  className="navbar__input-field"
                  type="text"
                  placeholder="I want to buy..."
                  aria-label="Search products"
                />
              </form>
              <button
                className="navbar__button"
                aria-label="Search"
                type="submit"
              >
                <svg
                  className="button-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="navbar__cart_favourite">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <MoonIcon size={24} />
              ) : (
                <SunIcon size={24} />
              )}
            </button>

            <Link to="/favourite">
              <div className="navbar_favourite">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Link>

            <div
              onClick={() => setIsCartOpen(true)}
              className="navbar_shopping-cart"
            >
              <svg
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 902.86 902.86"
              >
                <g>
                  <g>
                    <path
                      d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                    />
                    <path
                      d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"
                    />
                  </g>
                </g>
              </svg>
              <span className="navbar_shopping-cart--quantity">
                {getTotalQuantity()}
              </span>
            </div>
          </div>

          <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <ShoppingCart
              onClose={() => setIsCartOpen(false)}
              checkout={true}
            />
          </Dialog>
        </div>

        <div className="navbar__actions">
          <Link to="/auth/login">
            <button className="navbar__login" aria-label="Sign in">
              Sign in
            </button>
          </Link>
          <Link to="/auth/register">
            <button className="navbar__signup" aria-label="Register">
              Register
            </button>
          </Link>
        </div>
        <button
          ref={hamburgerRef}
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <svg
            className="button-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
