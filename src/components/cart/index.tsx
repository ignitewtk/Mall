import * as React from 'react'
import CartListItem from './CartListItem'

const CartView = () => {
    const l = [1, 2, 3, 4]
    return (
        <>
        <div style={{ backgroundColor:'white', width:'300px', height:'100vh'}}>
            Hello
            <ul className='cart-list-item'>
                {
                    l.map((u) => <CartListItem u={u}/>)
                }
            </ul>
            
        </div> 
        </>
    )
}

export default CartView