import * as React from 'react'

type CartListItemProps = {
    u: number
}

const CartListItem = (props: CartListItemProps) => {
    return (
        <>
        <div style={{border:'solid 1px'}}> {props.u} </div>
        </>
    )
}

export default CartListItem