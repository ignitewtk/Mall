import * as React from 'react'
import { Link } from 'react-router-dom'

import placeholderImage from './placeholder-image.png';
import { Container } from '@mui/material';
import { ProductInfo } from '.';


type Props = {
    info: ProductInfo
}

type States = {}


class ProductListItem extends React.Component<Props, States> {
    render() {
        return (
            <div className='product-list-item'>
                <img src={this.props.info?this.props.info.src:placeholderImage} width="100%" height="80%"/>
                <Container>
                    <Link to={this.props.info.productName.toString()}> 
                        {this.props.info.productName} 
                    </Link>
                </Container>
                <Container> {this.props.info.originPrice} </Container>
            </div>
        )
    }
}

export default ProductListItem