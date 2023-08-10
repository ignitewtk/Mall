import { Button, Container, Menu, MenuItem } from '@mui/material';
import * as React from 'react'
import Fade from '@mui/material/Fade';
import { useState } from 'react';

import '../styles/mainMenu.css';

type MenuState = {
    [key: string]: string
}


function MainMenu({ message }: {message: string}) {
    
    const [menuState, setMenuState] = useState<MenuState>({
        'category': 'none',
        'feature': 'none'
    })

    const handleShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        let newState: MenuState = {
            'category': 'none',
            'feature': 'none'
        }
        menuState[e.currentTarget.value] === 'none'?newState[e.currentTarget.value] = 'block':newState[e.currentTarget.value] = 'none'
        setMenuState(newState)
    }
    
    const handleHide = () => {
        setMenuState({
            'category': 'none',
            'feature': 'none'
        })
    }

    return (
        <div id='main-menu'> 
            <div className='menu-btn-container'>
                <Button 
                    className='menu-button'
                    value='category'
                    onClick={handleShow}
                    onMouseOver={handleShow}>
                    Category
                </Button>
                
            </div>
            <div className='menu-btn-container'>
                <Button 
                    value='feature'
                    className='menu-button'
                    onClick={handleShow}
                    onMouseOver={handleShow}> 
                    FEATURES
                </Button>
                
            </div>
            <Container 
                className='menu-list-container'
                style={{display:menuState['category']}} 
                onMouseLeave={handleHide}>
                <Container  className='menu-list-item'>
                    Milk & Dairy
                </Container>
                <Container  className='menu-list-item'>
                    Meats
                </Container>
                <Container  className='menu-list-item'>
                    Vegetables
                </Container>
            </Container>
            <Container 
                className='menu-list-container'
                style={{display:menuState['feature']}} 
                onMouseLeave={handleHide}>
                <Container className='menu-list-item'>
                    Half Price
                </Container>
                <Container  className='menu-list-item'>
                    80% On Discount
                </Container>
                <Container  className='menu-list-item'>
                    Membership Discount
                </Container>
                <Container  className='menu-list-item'>
                    New Friend Discount
                </Container>
            </Container>
        </div>
    )
    
}

export default MainMenu;