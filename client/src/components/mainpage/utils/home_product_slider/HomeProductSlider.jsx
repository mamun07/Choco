import React, { useContext } from 'react';
import { GlobalState } from '../../../../GlobalState';
import ProductItem from '../../utils/productItem/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper';

const HomeProductSlider = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={6}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        425: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="product-slider"
    >
      {products.map((product) => {
        return (
          <SwiperSlide style={{ padding: '1px' }} key={product._id}>
            <ProductItem product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeProductSlider;
