import React from "react";
import styles from "./Button.module.css";

const Button = ({ props, children }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
