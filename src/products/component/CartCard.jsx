import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeProduct, changeQuantity } from "../Store/Slice/CartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (type) => {
    if (type === "add" && product.quantity > quantity) {
      setQuantity(quantity + 1);
      dispatch(changeQuantity({ id: product.id, quantity: quantity + 1 }));
    }
    if (type === "subtract" && quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(changeQuantity({ id: product.id, quantity: quantity - 1 }));
    }
  };

  useEffect(() => {
    dispatch(changeQuantity({ id: product.id, quantity: quantity }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card
        sx={{
          maxHeight: 100,
          maxWidth: 400,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 1,
          padding: "0 10px",
        }}
      >
        <CardMedia
          component="img"
          height="50px"
          image={product.imageURL}
          alt={product.name}
          sx={{ width: "50px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={20}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={"900"}>
            {`$${product.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => handleChange("add")}>
              <AddIcon />
            </IconButton>
            <p>{quantity}</p>
            <IconButton onClick={() => handleChange("subtract")}>
              <RemoveIcon />
            </IconButton>
          </div>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(removeProduct(product.id));
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
