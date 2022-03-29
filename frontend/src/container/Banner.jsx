import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import styles from "../styled/banner.module.css";

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
        <div className={styles.bannerMain}>Home</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
