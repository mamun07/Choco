import Link from "next/link";
import React from "react";
import styles from "../styled/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerbg}>
      <div className="container">
        <div className={styles.footerMain}>
          <p>&#169; 2022 ChocoPie, all rights reserved.</p>
          <ul>
            <li>
              <Link href="/">
                <i className="lab la-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="lab la-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="lab la-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="lab la-google-plus"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="lab la-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
