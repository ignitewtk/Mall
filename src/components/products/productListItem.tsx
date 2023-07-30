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
                    <Link style={{textDecoration: 'none'}} to={this.props.info.productName.toString()}> 
                        {this.props.info.productName} 
                    </Link>
                </Container>
                <Container style={{color:"#333", letterSpacing: "normal"}}> $ {this.props.info.originPrice} </Container>
                {
                    Math.floor(Math.random() * 3) === 1? 
                    (<span style={{
                        position: 'absolute',
                        top: "0px",
                        left: '0px',
                        color:"white", 
                        margin: "0px 0 0 24px",
                        padding: "0 5px",
                        borderRadius: "25px",
                        backgroundColor: 'red',
                        border: "1px solid red"}}> Sale  </span>):<span></span>
                }
                
                
            </div>
        )
    }
}

export default ProductListItem