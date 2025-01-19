import React from "react";
import assets from "../../assets";
import styles from "./styles/input.module.css";

const Input = ({
  type = "text",
  name,
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
