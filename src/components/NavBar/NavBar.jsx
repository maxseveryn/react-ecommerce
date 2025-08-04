import React, { useState, useRef, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

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
          <a href="/" aria-label="Home">
            <img className="brand__logo" src={logo} alt="Shop logo" />
          </a>
        </div>

        <div
          className={`navbar__menu${isMenuOpen ? " open" : ""}`}
          ref={menuRef}
          aria-expanded={isMenuOpen}
          aria-label="Main menu"
        >
          <ul className="navbar__links">
            <li className="link__item">
              <a href="/new" tabIndex="0">
                New
              </a>
            </li>
            <li className="link__item">
              <a href="/sales" tabIndex="0">
                Sales
              </a>
            </li>
            <li className="link__item">
              <a href="/partnership" tabIndex="0">
                Partnership
              </a>
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
                <span className="navbar__dropdown-label">All clothes</span>
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
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                      fill="black"
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
        </div>
        <div className="navbar__actions">
          <button className="navbar__login" aria-label="Sign in">
            Sign in
          </button>
          <button className="navbar__signup" aria-label="Register">
            Register
          </button>
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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
