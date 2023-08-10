import React from 'react'

import Container from '@mui/material/Container';
import { Box } from '@mui/material';

import { useAppSelector } from '../../hooks'
import placeholderImage from './placeholder-image.png';


export const Product = () => {

    const imgUrl = useAppSelector(state => state.product.src)
    const currentProduct = useAppSelector(state => state.product)

    return (
        <Container className='product-page'>
            <Box className='product-img'><img src={imgUrl?imgUrl:placeholderImage} width="400px" height="400px"/></Box>
            <Box className='product-info'>

                <h1>
                    {currentProduct?currentProduct.productName:'UNKNOWN'}
                </h1>
                <div className='product-info-product-origin-price'>
                    $ {currentProduct?currentProduct.originPrice:'UNKNOWN'}
                </div>
                <div className='product-info-product-discount-price'>
                    $ {currentProduct?currentProduct.originPrice:'UNKNOWN'}
                </div>
                <button className='product-add-cart'> Add to Cart </button>
                <button className='product-add-like'> Add to Like </button>
            </Box>
            
        </Container>
    )
}