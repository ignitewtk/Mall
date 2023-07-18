import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ProductList from './products/ProductList';
import Filter from './products/Filter';
import MainMenu from './MainMenu';

type Props = {
    message: string;
}

type States = {
    s: number
}

class Theme extends React.Component<Props> {

    render() {
        return (
            <div>
                <Box id='theme-header'> 
                    <span> 202307171508 </span>
                    <div> Header </div>
                    
                </Box>
                <Box id='theme-menu'> <MainMenu /> </Box>
                <Container id='theme-body'>
                    <Filter />
                    <ProductList />
                </Container>
                <Box id='theme-footer'> Footer </Box>
            </div>
        )
    }
}
export default Theme