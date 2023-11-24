import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg"

const Footer = () => {
  const date = new Date()
  return <footer className={styles.footer}>
    <div className="container">
      <div className={styles.content}>
        <Dogs />
        <h2 className="title">Dogs Mania</h2>
      </div>
      <p>Dogs {date.getFullYear()} Alguns direitos reservados</p>
    </div>

  </footer>;
};

export default Footer;
