import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ProductList from './products/ProductList';
import Filter from './products/Filter';
import MainMenu from './MainMenu';
import AccountMenu from './AccountMenu';
import { TransactionView } from './Transactions';

type Props = {
    message: string;
}

class Theme extends React.Component<Props> {

    render() {
        return (
            <div>
                <Box id='theme-header'> 
                    <span> 202307171508 </span>
                    <span> Header </span>
                    <AccountMenu />
                </Box>
                
                <Box id='theme-menu'> <MainMenu message={"mock message"}/> </Box>
                <Container id='theme-body'>
                    <Filter />
                    <ProductList />
                </Container>
                <Container>
                    <TransactionView />
                </Container>
                <Box id='theme-footer'> Footer </Box>
            </div>
        )
    }
}
export default Theme