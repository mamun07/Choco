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
      ? setStickyClass("animate__animated animate__slideInDown")
      : setStickyClass("");
  }

  return (
    <div className={`${styles.headerbg} ${stickyClass}`}>
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
                    <Link href="/">Dark Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/about">Milk Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/contact">White Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/contact">Baking Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/contact">Organic Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/contact">Compound Chocolate</Link>
                  </li>
                  <li>
                    <Link href="/contact">Ruby Chocolate</Link>
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
              <li className="mobileNone" onClick={() => alert("Login Page")}>
                <i class="lar la-user"></i>
              </li>
              <li className="mobileNone">
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
