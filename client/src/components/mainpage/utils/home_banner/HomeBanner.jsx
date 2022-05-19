import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box component="div" className="banner-thumb">
                  <Link to={'/product'}>
                    <Typography
                      borderRadius={2}
                      variant="img"
                      component="img"
                      src="/banner/11.jpg"
                      alt="banner thumb"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box component="div" className="banner-thumb">
                  <Link to={'/product'}>
                    <Typography
                      borderRadius={2}
                      variant="img"
                      component="img"
                      src="/banner/11.jpg"
                      alt="banner thumb"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box component="div" className="banner-thumb">
                  <Link to={'/product'}>
                    <Typography
                      borderRadius={2}
                      variant="img"
                      component="img"
                      src="/banner/11.jpg"
                      alt="banner thumb"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box component="div" className="banner-thumb">
                  <Link to={'/product'}>
                    <Typography
                      borderRadius={2}
                      variant="img"
                      component="img"
                      src="/banner/11.jpg"
                      alt="banner thumb"
                    />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="banner-slider"
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
