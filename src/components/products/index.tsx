import * as React from 'react'
import {ProductList} from '../products/ProductList';
import Filter from '../products/Filter';
import { products } from './mock';


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

export const ProductsView = () => {

    const [params, setParams] = React.useState<FilterParam>()
    const [productList, setProductList] = React.useState<ProductInfo[]>([])

    React.useEffect(() => {
        fetch(`http://localhost:3001/products?`).then(async response => {
            if (response.ok) {
                console.log("update product list")
                setProductList(await response.json())
            }
        }).catch(() => setProductList(products))
    }, [params])
    

    return (
        <>
            <Filter params={params} setParams={setParams} />
            <ProductList productList={productList} />
        </>
    )
}