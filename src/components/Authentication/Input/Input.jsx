import React, { useState } from "react";

import styles from "./Input.module.css";

export default function Input({
  id,
  placeholder,
  type = "text",
  showToggle = false,
  required = false,
  ...props
}) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const inputType = showToggle && show ? "text" : type;

  function handleBlur(e) {
    if (required && !e.target.value.trim()) {
      setError("This field is required");
    } else {
      setError("");
    }
  }

  return (
    <div className={styles.field}>
      <div className={styles["input-wrapper"]}>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          onBlur={handleBlur}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            className={styles.input__eye}
            onClick={(e) => {
              e.preventDefault();
              setShow((prev) => !prev);
            }}
            aria-label={show ? "Hide password" : "Show password"}
          >
            <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
          </button>
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
