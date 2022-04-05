import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import styles from "../styled/banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="chocoSwiper"
    >
      <SwiperSlide>
        <div className={styles.bannerSingle}>
          <div className={styles.entryThumb}>
            <img src="/images/1.jpg" alt="banner image 1" />
          </div>
          <div className={styles.entryContent}>
            <h5>Dark Chocklate</h5>
            <h2>Your Best Dark Chocklate Over Here</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              sunt iure eos nihil mollitia facere atque consectetur sed? Aut?
            </p>
            <Link href="/wish">Order Now</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.bannerSingle}>
          <div className={styles.entryThumb}>
            <img src="/images/2.jpg" alt="banner image 1" />
          </div>
          <div className={styles.entryContent}>
            <h5>Dark Chocklate</h5>
            <h2>Your Best Dark Chocklate Over Here</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              sunt iure eos nihil mollitia facere atque consectetur sed? Aut?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.bannerSingle}>
          <div className={styles.entryThumb}>
            <img src="/images/3.jpg" alt="banner image 1" />
          </div>
          <div className={styles.entryContent}>
            <h5>Dark Chocklate</h5>
            <h2>Your Best Dark Chocklate Over Here</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              sunt iure eos nihil mollitia facere atque consectetur sed? Aut?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.bannerSingle}>
          <div className={styles.entryThumb}>
            <img src="/images/4.jpg" alt="banner image 1" />
          </div>
          <div className={styles.entryContent}>
            <h5>Dark Chocklate</h5>
            <h2>Your Best Dark Chocklate Over Here</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              sunt iure eos nihil mollitia facere atque consectetur sed? Aut?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.bannerSingle}>
          <div className={styles.entryThumb}>
            <img src="/images/5.jpg" alt="banner image 1" />
          </div>
          <div className={styles.entryContent}>
            <h5>Dark Chocklate</h5>
            <h2>Your Best Dark Chocklate Over Here</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              sunt iure eos nihil mollitia facere atque consectetur sed? Aut?
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
