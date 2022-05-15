import React, { useContext } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper';

const Home = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  return (
    <Box my={5}>
      <Container maxWidth="xl">
        <Box mb={2}>
          <Typography variant="h5">NEW ARRIVALS</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Swiper
          spaceBetween={15}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <ProductItem product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Home;
