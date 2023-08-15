import { createSlice } from '@reduxjs/toolkit'
import { ProductInfo } from '../products'

export interface CartItem {
    productId: string,
    productName: string,
    imgUrl: string,
    price: number,
    amount: number
}

const initialState: { cartList: CartItem[], totalValue: number } = {
    cartList: [],
    totalValue: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /**
         * 
         * @param state 
         * @param action
         */
        /** TODO: Logic check & HTTP request checking inventory */
        setItemAmount: (state, action) => {
            let item = action.payload

            for (var i=0; i<state.cartList.length; i++) {
                if (item.productName === state.cartList[i].productName) {
                    let updatedItem = {
                        ...state.cartList[i]
                    }
                    const newTotal = state.totalValue - state.cartList[i].price * state.cartList[i].amount + item.price * item.amount
                    const newList = [
                        ...state.cartList.slice(0, i),
                        updatedItem,
                        ...state.cartList.slice(i+1)
                    ]
                    return {
                        ...state,
                        cartList: newList,
                        totalValue: newTotal
                    }
                }
            }
            const newList = [
                ...state.cartList.slice(0),
                item
            ]
            const newTotal = state.totalValue + item.price * item.amount
            return {
                ...state,
                cartList: newList,
                totalValue: newTotal
            }
        },
        deleteItem: (state, action) => {
            let item = action.payload
            let idx = -1
            for (var i=0; i<state.cartList.length; i++) {
                if (item.productName === state.cartList[i].productName) {
                    idx = i
                    break
                }
            }
            if (idx !== -1) {   
                state.totalValue = state.totalValue - state.cartList[i].price * state.cartList[i].amount
                state.cartList = [
                    ...state.cartList.slice(0, idx),
                    ...state.cartList.slice(idx+1)
                ]
            }
        }
    }
})


export const { setItemAmount, deleteItem } = cartSlice.actions