import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styled/header.module.css";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  function stickNavbar() {
    window.scrollY > 200
      ? setStickyClass("headerbg animate__animated animate__slideInDown")
      : setStickyClass(`${styles.entryHeader}`);
  }

  return (
    <div className={`${styles.entryHeader} ${stickyClass}`}>
      <div className="container">
        <div className={styles.headerMain}>
          <div className={styles.headerLogoMain}>
            <div className={styles.headerLogo}>
              <Link href="/">
                <a>
                  <Image
                    src="/logo.png"
                    width="110px"
                    height="30px"
                    alt="Choco Logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.headerCategory}>
              <div className={styles.categoryButton}>
                <i className="las la-bars"></i>
                <ul
                  className={`${styles.categoryMenu} animate__animated animate__bounceIn`}
                >
                  <li>
                    <Link href="/">
                      <a>Dark Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>Milk Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>White Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Baking Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Organic Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Compound Chocolate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Ruby Chocolate</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.headerSearchMain}>
            <input type="text" placeholder="Search here..." />
            <div className={styles.searchIcon}>
              <button type="button" onClick={() => alert("Upload your image")}>
                <i className="las la-camera"></i>
              </button>
            </div>
          </div>
          <div className={styles.headerCarthMain}>
            <ul>
              <li className="mobileNone" onClick={() => alert("Login Page")}>
                <i className="lar la-user"></i>
              </li>
              <li className="mobileNone">
                <Link href="/wish">
                  <a>
                    <i className="lar la-heart"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a className={styles.headerCart}>
                    <i className="las la-shopping-cart"></i>
                    <span>3</span>
                  </a>
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
