import React from "react";
import "./FilterSection.css";

export default function FilterSecrion({ label, isOpen, onToggle, children }) {
  return (
    <div className="filter__section">
      <div tabIndex="0" role="button" aria-haspopup="true" onClick={onToggle}>
        <span className="filter-label">
          {label}
          <button
            className="filter-button"
            tabIndex="-1"
            type="button"
            aria-haspopup="true"
          >
            <svg
              className="button-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 9.29289L6.29289 14C5.90237 14.3905 5.90237 15.0237 6.29289 15.4142C6.68342 15.8047 7.31658 15.8047 7.70711 15.4142L12 11.1213L16.2929 15.4142C16.6834 15.8047 17.3166 15.8047 17.7071 15.4142C18.0976 15.0237 18.0976 14.3905 17.7071 14L12 9.29289Z"
                  fill="currentColor"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </span>
      </div>

      {isOpen && <div className="filter__content">{children}</div>}
    </div>
  );
}
