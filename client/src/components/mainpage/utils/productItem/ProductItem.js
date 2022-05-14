import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
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
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h5">{product.price}</Typography>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
