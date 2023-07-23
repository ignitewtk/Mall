import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'


import MainMenu from './MainMenu';
import AccountMenu from './AccountMenu';

import { LoginView } from './login';
import { TransactionView } from './Transactions';
import { ProductsView } from './products';
import { Product } from './products/Product';
import { useDocumentTitle } from '../utils';



const Theme = () => {
    useDocumentTitle('MALL TS LNX')
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
                    
                        <Route path={'/'} element={<ProductsView />} />
                        <Route path={'/products'} element={<ProductsView />} />
                        <Route path={'/:productId/*'} element={<Product productId='idnfj325' productName='product name' productPrice={23}/>}/>
                        <Route path={'/login'} element={<LoginView />}/>
                        <Route path={'/transaction'} element={<TransactionView />}/>
                    </Routes>
                
            </Container>
            <Box id='theme-footer'> Footer </Box>
        </Router>
    )
}

export default Theme