import * as React from 'react'

import { Container } from '@mui/material';
import ProductListItem from './productListItem';
import { ProductInfo } from '.';

interface ProductListProps {
    productList: ProductInfo[]
}

export const ProductList = ({productList}: ProductListProps) => {

    return (
        <Container id='product-list'> 
        
        {
            productList.map((productInfo) => <ProductListItem key={productInfo.productId} info={productInfo}/>)
        }
        
        </Container>
        
    )
    // )
}

