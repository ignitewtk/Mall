import * as React from 'react'
import CartListItem from './CartListItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setItemAmount, deleteItem } from './cartSlice'
import '../../styles/cart.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const cartList = useAppSelector(state => state.cart.cartList)
    const total = useAppSelector(state => state.cart.totalValue)
    
    return (
        <>
            <div className='cart-container' >
                <ul className='cart-list'>
                    {
                        cartList.map((item) => <CartListItem item={item}/>)
                    }
                </ul>
                <div> Total: <span className='cart-stats'> {total} </span></div>
            </div> 
        </>
    )
}

export default Payment