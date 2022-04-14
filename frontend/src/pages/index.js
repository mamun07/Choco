import Head from "next/head";
import Banner from "../container/Banner";
import Products from "../container/Products";
import styles from "../styled/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Welcome to ChocoPie || Get a custom design Chocolate for you and your
          family.
        </title>
      </Head>
      <main className={styles.homeMain}>
        <Banner />
        <div className="container">
          <Products />
        </div>
        <div className="container">
          <h2>Add Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Banner</h2>
          <h2>Policy</h2>
        </div>
      </main>
    </>
  );
}
