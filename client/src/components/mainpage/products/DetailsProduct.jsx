import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import ProductItem from '../utils/productItem/ProductItem';

const DetailsProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [detailsProduct, setDetailsProduct] = useState([]);

  useEffect(() => {
    if (params)
      products.forEach((product) => {
        if (product._id === params.id) setDetailsProduct(product);
      });
  }, [params, products]);
  if (detailsProduct.length === 0) return null;
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} my={3}>
        <Grid item xs={12} md={5}>
          <Box className="product-thumb">
            <img src={detailsProduct.images.url} alt={detailsProduct.title} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" mb={2}>
            {detailsProduct.title}
          </Typography>
          <Typography variant="h4">৳ {detailsProduct.price}</Typography>
          <Box mt={5} sx={{ colo: '#fff' }}>
            <Link to="/cart">
              <Button
                sx={{ p: '10px 40px', fontSize: '20px' }}
                variant="contained"
                startIcon={<ShoppingBasketOutlinedIcon />}
              >
                BUY NOW
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography variant="p" p={2}>
              Related Products
            </Typography>
            {products.map((product) => {
              return product.category === detailsProduct.category ? (
                <Box mb={2}>
                  <ProductItem key={product._id} product={product} />
                </Box>
              ) : null;
            })}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} my={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">Product Description</Typography>
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
