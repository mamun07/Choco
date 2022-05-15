import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height={200}
        image={product.images.url}
        alt={product.title}
      />
      <CardContent>
        <NavLink to={`/detail/${product._id}`}>
          <Typography gutterBottom variant="h5" component="h5">
            {product.title}
          </Typography>
        </NavLink>
        <Typography variant="h5" color={'orange'}>
          ৳ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
