import Grid from "@mui/material/Grid";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../models/product";
import { addProduct } from "../Store/Slice/CartSlice";
import { CTypography, RTypography } from "../utils/cutome-typography";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, maxHeight: 450, margin: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${product?.imageURL}`}
            alt={`${product?.name}`}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <CTypography gutterBottom variant="h5">
              {product?.name}
            </CTypography>
            <RTypography gutterBottom variant="h4">
              {`${product?.currency} - ${product?.price}`}
            </RTypography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(addProduct(product));
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
