import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

const HomeBanner = () => {
  const SliderImage = [
    {
      url: '/banner/1.jpg',
    },
    {
      url: '/banner/1.jpg',
    },
  ];

  return (
    <Box component="div">
      <Container maxWidth="xxl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            Left Site
          </Grid>
          <Grid item xs={12} sm={8}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
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
              {SliderImage.map((image, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Typography
                      variant="img"
                      component="img"
                      src={image.url}
                      alt={i}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBanner;
