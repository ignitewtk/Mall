import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'


import MainMenu from './MainMenu';
import AccountMenu from './AccountMenu';
import { LoginView } from './login';
import { TransactionView } from './Transactions';
import { FilterParam, ProductInfo, ProductViewProps, ProductsView } from './products';
import { Product } from './products/Product';
import { useDocumentTitle } from '../utils';
import { Test } from './Test';
import { ProductList } from './products/ProductList';
import { products } from './products/mock';


const Theme = () => {
    useDocumentTitle('MALL TS LNX')

    const [params, setParams] = React.useState<FilterParam>({
        checkedCategory: ['All'],
        checkedRating: ['All'],
        sort: 'Price+'
    })
    
    const [productList, setProductList] = React.useState<ProductInfo[]>([])
    
    React.useEffect(() => {
        fetch(`http://localhost:3001/products?`).then(async response => {
            if (response.ok) {
                setProductList(await response.json())
            }
        }).catch(() => setProductList(products))
    }, [params])


    return (
        <Router>
            <Box id='theme-header'> 
                <span> 202307171508 </span>
                <span> Header </span>
                <AccountMenu />
            </Box>
            <Box id='theme-menu'> <MainMenu message={"mock message"}/> </Box>
            <Container id='theme-body'>
                <Routes>
                    <Route path={'/'} element={<ProductsView params={params} setParams={setParams} productList={productList} setProductList={function (productList: ProductViewProps): void {
                        throw new Error('Function not implemented.');
                    } }/>} />
                    <Route path={'products'} element={<ProductList productList={productList} />}/>
                    <Route path={':productId/*'} element={<Product productId='idnfj325' productName='product name' productPrice={23}/>}/>
                    <Route path={'/test'} element={<Test />} />

                    <Route path={'/login'} element={<LoginView />}/>
                    <Route path={'/transaction'} element={<TransactionView />}/>
                </Routes>
                
            </Container>

            <Box id='theme-footer'> Footer </Box>
        </Router>
    )
}

export default Theme