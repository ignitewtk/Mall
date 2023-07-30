import React from 'react'
import placeholderImage from './placeholder-image.png';
import Container from '@mui/material/Container';

export type ProductProps = {
    productId: string,
    productName: string,
    productPrice: number
}

export const Product = (props: ProductProps) => {

    return (
        <Container>
            <img src={placeholderImage} width="500px" height="500px"/>
                
            <div>
                Product {props.productId}
            </div>
            <div>
                Product {props.productName}
            </div>
            <div>
                Product {props.productPrice}
            </div>
        </Container>
    )
}