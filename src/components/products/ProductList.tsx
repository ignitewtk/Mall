import * as React from 'react'
import { Link } from 'react-router-dom'

import placeholderImage from './placeholder-image.png';
import { Container } from '@mui/material';


type ProductListItemProps = {
    productName: number
}
type Props = {}

type States = {}


class ProductListItem extends React.Component<ProductListItemProps, States> {
    render() {
        return (
            <div className='product-list-item'>
                <img src={placeholderImage} width="100%" height="80%"/>
                {/* <div> Item {this.props.productName} </div> */}
                <Container>
                    <Link to={this.props.productName.toString()}> 
                        Product name - {this.props.productName} 
                    </Link>
                </Container>
                <Container> Price</Container>
            </div>
        )
    }
}

class ProductList extends React.Component<Props, States> {
    render() {
        let productIds: number[] = new Array(15)
        for (var i=0; i<15; i++) {
            productIds.push(i)
        }
        
        return (
            <Container id='product-list'> 
            
            {
                productIds.map((n) => <ProductListItem key={n} productName={n}/>)
            }
            
            </Container>
            
        )
    }
}
export default ProductList