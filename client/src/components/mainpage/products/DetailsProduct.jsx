import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

import ProductItem from '../utils/productItem/ProductItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

const DetailsProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [detailsProduct, setDetailsProduct] = useState([]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(1);

  const onChangePlus = () => {
    if (count < 100) return setCount(count + 1);
  };
  const onChangeMinus = () => {
    if (count > 1) return setCount(count - 1);
  };

  useEffect(() => {
    if (params.id)
      products.forEach((product) => {
        if (product._id === params.id) setDetailsProduct(product);
      });
  }, [params.id, products]);
  if (detailsProduct.length === 0) return null;

  return (
    <Container maxWidth="xxl">
      <Grid container spacing={3} my={3}>
        <Grid item xs={12} md={4}>
          <Box className="product-thumb">
            <Swiper
              thumbs={{ Swiper: thumbsSwiper }}
              spaceBetween={10}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={detailsProduct.images.url}
                  alt={detailsProduct.title}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={detailsProduct.images.url}
                  alt={detailsProduct.title}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ cursor: 'pointer' }}>
                  <img
                    src={detailsProduct.images.url}
                    alt={detailsProduct.title}
                  />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" mb={2}>
            {detailsProduct.title}
          </Typography>
          <Typography variant="h5">
            SKU : {detailsProduct.product_id}
          </Typography>
          <Typography variant="h4">৳. {detailsProduct.price}</Typography>
          <Box mt={5} component="form" noValidate autoComplete="off">
            <Typography variant="h4">Quantity:</Typography>
            <FormControl>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Button
                  onClick={onChangeMinus}
                  variant="outlined"
                  sx={{ height: '50px', textAlign: 'center', borderRadius: 0 }}
                >
                  <i className="las la-minus"></i>
                </Button>
                <OutlinedInput
                  disabled
                  sx={{
                    width: '100px',
                    height: '50px',
                    textAlign: 'center',
                    borderRadius: 0,
                  }}
                  value={count}
                />
                <Button
                  onClick={onChangePlus}
                  variant="outlined"
                  sx={{ height: '50px', textAlign: 'center', borderRadius: 0 }}
                >
                  <i className="las la-plus"></i>
                </Button>
              </Box>
            </FormControl>
          </Box>

          <Box mt={5}>
            <Link to="/cart">
              <Button
                size="large"
                sx={{
                  width: '200px',
                  height: '50px',
                  fontSize: '15px',
                  bgcolor: 'secondary.dark',
                  ':hover': {
                    bgcolor: 'secondary.light',
                  },
                }}
                variant="contained"
              >
                BUY IT NOW
              </Button>
            </Link>
            <Button
              size="large"
              sx={{ width: '200px', height: '50px', fontSize: '15px', ml: 2 }}
              variant="outlined"
            >
              Add To Cart
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography variant="h5" py={2}>
              Related Products
            </Typography>
            {products.map((product) => {
              return product.category === detailsProduct.category ? (
                <Box mb={2} key={product._id}>
                  <ProductItem product={product} />
                </Box>
              ) : null;
            })}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} my={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h2">Product Description</Typography>
          </Box>
          <Box>
            <Typography variant="p">{detailsProduct.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsProduct;
