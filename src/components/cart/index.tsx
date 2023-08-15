import * as React from 'react'
import CartListItem from './CartListItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setItemAmount, deleteItem } from './cartSlice'
import '../../styles/cart.css';

const CartView = () => {
    const cartList = useAppSelector(state => state.cart.cartList)
    const total = useAppSelector(state => state.cart.totalValue)
    console.log('CartList:', cartList)
    return (
        <>
            <div className='cart-container' >
                <ul className='cart-list'>
                    {
                        cartList.map((item) => <CartListItem item={item}/>)
                    }
                </ul>
                <div> Total: <span className='cart-stats'> {total} </span></div>
                <button> Check </button>
            </div> 
        </>
    )
}

export default CartView