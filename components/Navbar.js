import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <Link href="/">
            <li className={styles.navLink}>home</li>
          </Link>
          <Link href="/services">
            <li className={styles.navLink}>services</li>
          </Link>
          <Link href="/contact">
            <li className={styles.navLink}>contact</li>
          </Link>
          <Link href="/about">
            <li className={styles.navLink}>about</li>
          </Link>
          <Link href="/login">
            <li className={styles.navLink}>login</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
