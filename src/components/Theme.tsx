import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
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
import { Grid } from '@mui/material';


const Theme = () => {

    useDocumentTitle('MALL TS LNX')

    const [params, setParams] = React.useState<FilterParam>({
        checkedCategory: ['All'],
        checkedRating: ['All'],
        sort: 'Price+'
    })
    
    const [productList, setProductList] = React.useState<ProductInfo[]>([])
    
    // Initialize product list when first lauch the page
    React.useEffect(() => {
        fetch(`http://localhost:3001/products?`).then(async response => {
            if (response.ok) {
                setProductList(await response.json())
            }
        }).catch(() => setProductList(products))
    }, [params])
    

    return (
        <>
        <Router>
            <Box id='theme-header'> 
                <span style={{ fontSize: "30px", fontFamily:"Lucida Handwriting", color:"black"}}> RochaSt Online </span>
                <AccountMenu />
            </Box>
            <Divider />
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
        </Router>

        <Grid id='theme-footer' container spacing={2}>
            <Grid item xs={3}>
                <h2> RochaSt </h2>
                <div> OFFICIAL SITE </div>
                <div> COMPANY </div>
            </Grid>
            <Grid item xs={3}>
                <h4> CATEGORY </h4>
                <div> MEAT & SEAFOOD </div>
                <div> VEGETABLES </div>
                <div> MILK & DAIRY </div>
                <h4> BRAND </h4>
                <div> FRESH AUSTRALIAN </div>
                <div> ASIAN </div>
                <div> EUROPEAN </div>
                <div> INDIAN </div>
            </Grid>
            <Grid item xs={3}>
                <h4> REVELANT </h4>
                <div> ALL ITEMs </div>
                <div> RANKING </div>
                <div> FEATURES </div>
                <div> NEWS </div>
                <div> ON SALE </div>
            </Grid>
            <Grid item xs={3}>
                <h4> ABOUT US </h4>
                <div> PRIVACY POLICY </div>
                <div> CUSTOMER CENTER </div>
                <div> GUIDE </div>
                <div> CAREER </div>
            </Grid>
        </Grid>
        </>
    )
}

export default Theme