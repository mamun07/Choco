import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styled/header.module.css";

const Header = () => {
  return (
    <div className={styles.headerbg}>
      <div className="container">
        <div className={styles.headerMain}>
          <div className={styles.headerLogoMain}>
            <div className={styles.headerLogo}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  width="100px"
                  height="40px"
                  alt="Choco Logo"
                />
              </Link>
            </div>
            <div className={styles.headerCategory}>
              <div className={styles.categoryButton}>
                <i class="las la-bars"></i>
                <ul className={styles.categoryMenu}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.headerSearchMain}>
            <input type="search" placeholder="search here..." />
          </div>
          <div className={styles.headerCarthMain}>
            <ul>
              <li onClick={() => alert("Login Page")}>
                <i class="lar la-user"></i>
              </li>
              <li>
                <Link href="/wish">
                  <i class="lar la-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <div className={styles.headerCart}>
                    <i class="las la-shopping-cart"></i>
                    <span>3</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
