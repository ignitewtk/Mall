import * as React from 'react'
import {ProductList} from '../products/ProductList';
import Filter from '../products/Filter';
import { products } from './mock';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Product } from './Product';

import '../../styles/products.css';

export interface FilterParam {
    checkedCategory: string[],
    checkedRating: string[],
    sort: string
}

export interface ProductInfo {
    productId: string,
    productName: string,
    originPrice: number,
    discountPrice: number,
    rating: number,
    src: string
}

export interface ProductViewProps {
    params: FilterParam,
    setParams: (params: FilterParam) => void
    productList: ProductInfo[],
    setProductList: (productList: ProductViewProps) => void
}

export const ProductsView = ({params, setParams, productList, setProductList}: ProductViewProps) => {

    return (
        <>
            <Filter params={params} setParams={setParams} />
            <ProductList productList={productList} />
        </>
    )
}