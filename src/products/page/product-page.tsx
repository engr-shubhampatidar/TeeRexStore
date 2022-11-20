import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { IconButton, TextField } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProductCard from "../component/product-card";
import useApi from "../services/use-api";
import { Filter } from "../component/Filter";
import { Product } from "../../models/product";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#edf2f4cc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// useApi<{ students: Person[] }>({ url: "get-homeboard-students" })
function ProductPage() {
  const { response, loading, error } = useApi({
    method: "get",
    url: "/coding-problems/shopping-cart/catalogue.json",
  });

  const [products, setProducts] = useState<Product[]>();
  const [searchStringArr, setSearchStringArr] = useState<string[]>([]);

  useEffect(() => {
    if (response) {
      setProducts(response);
    }
  }, [response]);

  const check = (product: Product, searchStringArr: string[]) => {
    for (let i = 0; i < searchStringArr.length; i++) {
      if (
        product.name.toLowerCase().includes(searchStringArr[i].toLowerCase()) ||
        product.color
          .toLowerCase()
          .includes(searchStringArr[i].toLowerCase()) ||
        product.type.toLowerCase().includes(searchStringArr[i].toLowerCase()) ||
        product.gender.toLowerCase().includes(searchStringArr[i].toLowerCase())
      ) {
        return true;
      }
    }
  };

  const [filter, setFilter] = useState<string[]>([]);
  useEffect(() => {
    if (searchStringArr.length > 0) {
      setProducts(
        response.filter((product: Product) => check(product, searchStringArr))
      );
    } else {
      setProducts(response);
    }
  }, [searchStringArr, response]);

  useEffect(() => {
    if (filter.length > 0) {
      setProducts(response?.filter((product) => check(product, filter)));
    } else {
      setProducts(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const setfilterAttribute = (value: string, task: "add" | "remove") => {
    if (task === "add") {
      setFilter((prev) => [...prev, value]);
    } else {
      setFilter(filter.filter((item) => item !== value));
    }
  };

  return (
    <Grid
      sx={{
        margin: "0",
        width: "100%",
      }}
      container
      spacing={2}
    >
      <Grid item md={4} display={{ xs: "none", md: "block" }}>
        <Item sx={{ position: "sticky", top: "64px" }}>
          <Filter setfilterAttribute={setfilterAttribute} />
        </Item>
      </Grid>
      <Grid
        item
        md={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid container spacing={2} flexDirection="column" alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              id="search-box"
              placeholder="Search here"
              onChange={(e) => setSearchStringArr(e.target.value.split(" "))}
            />
          </Grid>
          <Grid item display={{ xs: "block", md: "none" }} alignItems="center">
            <IconButton>
              <FilterAltIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: "10px", overflow: "auto" }}>
          {loading ? (
            <p>Loading</p>
          ) : (
            products?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

ProductPage.propTypes = {};

export default ProductPage;
