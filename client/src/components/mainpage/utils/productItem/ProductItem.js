import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Card>
      <NavLink to={`/detail/${product._id}`}>
        <CardMedia
          component="img"
          image={product.images.url}
          alt={product.title}
        />
      </NavLink>
      <CardContent>
        <NavLink to={`/detail/${product._id}`}>
          <Typography gutterBottom variant="h5" component="h5">
            {product.title}
          </Typography>
        </NavLink>
        <Typography variant="h5" color="secondary.dark">
          ৳ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
