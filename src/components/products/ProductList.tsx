import React from "react"
import { ProductInfo } from "."
import { Container } from "@mui/material"
import ListItem from "./ListItem"



interface ProductListProps {
    productList: ProductInfo[]
}

export const ProductList = React.memo(({productList}: ProductListProps) => {
    return (
        <Container id='product-list'> 
        
        {
            productList.map((productInfo) => 
            <ListItem key={productInfo.productId} info={productInfo}/>)
        }
        
        </Container>
        
    )
})