import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import styles from "../styled/slider.module.css";
import Link from "next/link";

const ProductSlider = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={false}
      autoplay={false}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 5.3,
          spaceBetween: 10,
        },
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className={styles.productsgrid}
    >
      <SwiperSlide>
        <div className={styles.productGrid}>
          <div className={styles.gridThumb}>
            <Link href="/">
              <img src="/images/p1.jpg" alt="product slider image" />
            </Link>
          </div>
          <div className={styles.gridContent}>
            <div className={styles.title}>
              <Link href="/">
                <h2>Vishudh Women Blue & Pink Printed Kurta With Palazzos</h2>
              </Link>
            </div>
            <div className={styles.prices}>
              <h4>
                <i className="las la-dollar-sign"></i>
                400
              </h4>
              <span>
                <i className="las la-dollar-sign"></i>
                600
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.productGrid}>
          <div className={styles.gridThumb}>
            <Link href="/">
              <img src="/images/p1.jpg" alt="product slider image" />
            </Link>
          </div>
          <div className={styles.gridContent}>
            <div className={styles.title}>
              <Link href="/">
                <h2>Vishudh Women Blue & Pink Printed Kurta With Palazzos</h2>
              </Link>
            </div>
            <div className={styles.prices}>
              <h4>
                <i className="las la-dollar-sign"></i>
                400
              </h4>
              <span>
                <i className="las la-dollar-sign"></i>
                600
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.productGrid}>
          <div className={styles.gridThumb}>
            <Link href="/">
              <img src="/images/p1.jpg" alt="product slider image" />
            </Link>
          </div>
          <div className={styles.gridContent}>
            <div className={styles.title}>
              <Link href="/">
                <h2>Vishudh Women Blue & Pink Printed Kurta With Palazzos</h2>
              </Link>
            </div>
            <div className={styles.prices}>
              <h4>
                <i className="las la-dollar-sign"></i>
                400
              </h4>
              <span>
                <i className="las la-dollar-sign"></i>
                600
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.productGrid}>
          <div className={styles.gridThumb}>
            <Link href="/">
              <img src="/images/p1.jpg" alt="product slider image" />
            </Link>
          </div>
          <div className={styles.gridContent}>
            <div className={styles.title}>
              <Link href="/">
                <h2>Vishudh Women Blue & Pink Printed Kurta With Palazzos</h2>
              </Link>
            </div>
            <div className={styles.prices}>
              <h4>
                <i className="las la-dollar-sign"></i>
                400
              </h4>
              <span>
                <i className="las la-dollar-sign"></i>
                600
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
