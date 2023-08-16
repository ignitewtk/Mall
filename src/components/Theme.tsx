import * as React from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';

import MainMenu from './MainMenu';
import AccountMenu from './AccountMenu';
// import { LoginView } from './login';
// import { TransactionView } from './Transactions';
import { FilterParam, ProductInfo, ProductViewProps, ProductsView } from './products';
// import { Product } from './products/Product';
import { useDocumentTitle } from '../utils';
import { Test } from './myTest/Test';
import { ProductList } from './products/ProductList';
import { products } from './products/mock';
// import { RegisterView } from './register';
import Payment from './cart/Payment';


const Product = lazy(() => import('./products/Product').then(({Product}) => ({default: Product})))
const LoginView = lazy(() => import('./login').then(({LoginView}) => ({default: LoginView})))
const RegisterView = lazy(() => import('./register').then(({RegisterView}) => ({default: RegisterView})))

const Theme = () => {

    const [params, setParams] = React.useState<FilterParam>({
        categories: [],
        ratings: [],
        sort: 'Price+'
    })
    const [productList, setProductList] = React.useState<ProductInfo[]>([])
    
    useDocumentTitle('MALL TS LNX')

    // Initialize product list when first lauch the page
    /**
     * TODO: update apiURL
     */
    React.useEffect(() => {
        
        fetch(`https://backend202307112242.azurewebsites.net/product/productlist`).then(async response => {
            if (response.ok) {
                setProductList(await response.json())
            } else {
                setProductList(products)
            }
        }).catch(() => setProductList(products))

        // fetch(`http://localhost:3001/products?`).then(async response => {
        //     if (response.ok) {
        //         setProductList(await response.json())
        //     }
        // }).catch(() => setProductList(products))
    }, [params])

    return (
        <Router>
            <Box id='theme-header'> 
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span style={{ fontSize: "30px", fontFamily:"Lucida Handwriting", color:"black"}}> RochaSt Online </span>
                </Link>
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
                    <Route path={':productId/*'} element={
                        <Suspense>
                            <Product />
                        </Suspense>}/>
                    <Route path={'/test'} element={<Test />} />

                    <Route path={'/login'} element={
                        <Suspense>
                            <LoginView />
                        </Suspense>}/>
                    <Route path={'/register'} element={
                        <Suspense>
                            <RegisterView />
                        </Suspense>}/>
                    <Route path={'/forgetPw'} element={<div>Forget Password </div>}/>
                    <Route path={'/payment'} element={
                         <Suspense>
                            <Payment />
                        </Suspense>}/>
                    {/* <Route path={'/transaction'} element={<TransactionView />}/> */}
                </Routes>
            </Container>  
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
                    <h4> RELEVANT </h4>
                    <div> ALL ITEMs </div>
                    <div> RANKING </div>
                    <div> FEATURES </div>
                    <div> NEWS </div>
                    <div> ON SALE </div>
                </Grid>
                <Grid item xs={3}>
                    <h4> ABOUT US </h4>
                    <div> <Link to='/test'> PRIVACY POLICY </Link> </div>
                    <div> CUSTOMER CENTER </div>
                    <div> GUIDE </div>
                    <div> CAREER </div>
                </Grid>
            </Grid>
        </Router>
    )
}

export default Theme