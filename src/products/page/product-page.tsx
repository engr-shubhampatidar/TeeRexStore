import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import ProductCard from '../component/product-card';
import useApi from '../services/use-api';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function ProductPage() {
    const { response, loading, error } = useApi({ method: "get", url: "/coding-problems/shopping-cart/catalogue.json" })

    return (
        <Grid sx={{
            margin: '0',
            height: "calc(100vh - 10px)",
            width: "100%"
        }} container spacing={2}>
            <Grid item md={4}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item md={8} >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField id='search-box' placeholder='Search here' />
                </Box>

                <Grid container spacing={2} sx={{ padding: "10px" }} >
                    {loading ? <p>Loading</p> : response?.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

ProductPage.propTypes = {}

export default ProductPage
