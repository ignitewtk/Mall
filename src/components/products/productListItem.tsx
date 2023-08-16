import * as React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Alert, Collapse, Container } from '@mui/material';

import { useAppDispatch } from '../../hooks'
import { setCurrentProduct } from './productSlice'
import { setItemAmount } from '../cart/cartSlice';
import { ProductInfo } from '.';
import placeholderImage from './placeholder-image.png';


interface Props {
    info: ProductInfo
}

const ProductListItem = ({info}: Props) => {

    const [alertShowed, setAlertShow] = useState(false)
    const dispatch = useAppDispatch()
    return (
        <div className='product-list-item'>
            <Link 
                onClick={() => {
                    dispatch(setCurrentProduct({
                        productId: info.productId,
                        productName: info.productName,
                        originPrice: info.originPrice,
                        discountPrice: info.discountPrice,
                        rating: info.rating,
                        src: info.src
                    }))
                    setAlertShow(true)
                    setTimeout(() => {
                        setAlertShow(false)
                    }, 1000)

                }}
                style={{textDecoration: 'none'}} 
                to={info.productId.toString()}> 
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
                <img src={info?info.src:placeholderImage} className="product-list-image"/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    let item = {
                        productId: info.productId,
                        productName: info.productName,
                        imgUrl: info.src,
                        price: info.discountPrice,
                        amount: 1
                    }
                    dispatch(setItemAmount(item))
                }} className='list-add-button'> + </button> 
                <Container> {info.productName}  </Container>
                <Container style={{color:"#333", letterSpacing: "normal"}}> $ {info.originPrice} </Container>
            </Link>
            <Collapse in={alertShowed}>
                <Alert style={{ position: "fixed", top:"5%", left:"45%"}}>
                    Item is added.
                </Alert>
            </Collapse>
        </div>
    )
}

export default ProductListItem