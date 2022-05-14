import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.images.url}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="h5">{product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
