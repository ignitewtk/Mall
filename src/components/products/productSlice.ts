import { createSlice } from '@reduxjs/toolkit'
import { ProductInfo } from '.'

const initialState: ProductInfo = {
    productId: '',
    productName: '',
    originPrice: 0,
    discountPrice: 0,
    rating: 0,
    src: ''
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        /**
         * 
         * @param state 
         * @param action
         */
        setCurrentProduct: (state, action) => action.payload
    }
})


export const { setCurrentProduct } = productSlice.actions