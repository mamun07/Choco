import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

import ProductItem from '../utils/productItem/ProductItem';

const DetailsProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [detailsProduct, setDetailsProduct] = useState([]);

  useEffect(() => {
    if (params.id)
      products.forEach((product) => {
        if (product._id === params.id) setDetailsProduct(product);
      });
  }, [params.id, products]);
  if (detailsProduct.length === 0) return null;
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} my={3}>
        <Grid item xs={12} md={5}>
          <Box
            className="product-thumb"
            border="1px solid"
            borderColor="primary.light"
            borderRadius="5px"
            overflow="hidden"
          >
            <img src={detailsProduct.images.url} alt={detailsProduct.title} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" mb={2}>
            {detailsProduct.title}
          </Typography>
          <Typography variant="h5">Sold : {detailsProduct.sold}</Typography>
          <Typography variant="h5">SKU : {detailsProduct.content}</Typography>
          <Typography variant="h4">৳ {detailsProduct.price}</Typography>
          <Box mt={5}>
            <Link to="/cart">
              <Button
                sx={{
                  p: '10px 30px',
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
              sx={{ p: '10px 30px', fontSize: '15px', ml: 2 }}
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
