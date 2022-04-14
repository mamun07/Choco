import React from "react";
import SectionTitle from "../components/SectionTitle";
import styles from "../styled/productsection.module.css";
import ProductSlider from "../components/ProductSlider";

const Products = () => {
  return (
    <div className={styles.productSection}>
      <SectionTitle title="new arrivals" seemore="See More" link="/" />
      <ProductSlider />
    </div>
  );
};

export default Products;
