import * as React from 'react'
import CartListItem from './CartListItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setItemAmount, deleteItem } from './cartSlice'
import '../../styles/cart.css';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
    const cartList = useAppSelector(state => state.cart.cartList)
    const total = useAppSelector(state => state.cart.totalValue)
    const navigate = useNavigate()
    
    return (
        <>
            <div className='cart-container' >
                <ul className='cart-list'>
                    {
                        cartList.map((item) => <CartListItem item={item}/>)
                    }
                </ul>
                <div> Total: <span className='cart-stats'> {total} </span></div>
                <button onClick={()=>{
                    navigate('/payment')
                }}> Check </button>
            </div> 
        </>
    )
}

export default CartView