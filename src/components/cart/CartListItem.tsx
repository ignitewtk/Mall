import * as React from 'react'
import placeholderImage from '../products/placeholder-image.png'
import { CartItem } from './cartSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Divider } from '@mui/material'

type CartListItemProps = {
    item: CartItem
}

const CartListItem = ({item}: CartListItemProps) => {
    return (
        <>
            <div className='cart-item'> 
                <div>
                    <img className='cart-item-img' src={item.imgUrl?item.imgUrl:placeholderImage} style={{ width: '100px', height:'100px'}}></img>
                    <span className='cart-item-text'>
                            <div> {item.productName}  </div>
                            <div> Amount: {item.amount} </div>
                            <div > Unit Price: <span className='cart-stats'> $ {item.price} </span></div>
                    </span>
                </div>
                <div>
                    <button> + </button>
                    <button> - </button>
                    <button> 0 </button>
                </div>
                
            </div>
            <Divider />          
        </>
    )
}

export default CartListItem