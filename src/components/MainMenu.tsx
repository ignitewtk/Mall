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
        if(menuState[e.currentTarget.value] === 'none') {
            newState[e.currentTarget.value] = 'block'
            setMenuState(newState)
        }
        
    }

    const handleHide = () => {
        setMenuState({
            'category': 'none',
            'feature': 'none'
        })
    }


    // const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null)
    // const open = Boolean(anchorEl)


    // const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget)
    // }
    

    // const handleClose = (event:React.MouseEvent<HTMLElement>) => {
    //         setAnchorEl(null)
    // }
    // const btnArr = ['Category', 'Brand']
    // const menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']

    return (
        <div id='main-menu'> 
        {/* {
            btnArr.map((category) => 
                <div 
                    style={{display:'inline'}}
                    key={category}>
                    <Button 
                        onClick={handleOpen}
                        className='menu-button'> 
                        {category} 
                    </Button>
                    <Menu 
                        sx={{
                            '& .MuiPaper-root': {
                              boxShadow: 'none', // Set box-shadow to none for the Paper component
                            },
                          }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        
                        TransitionComponent={Fade}>
                            
                        {
                            menuItems.map((menuItem) =>
                            <MenuItem 
                                key={menuItem}
                                onClick={handleClose}
                            >{menuItem} </MenuItem> )
                        }
                    </Menu>
                </div>
                
                 )
        } */}
            <div className='menu-btn-container'>
                <Button 
                    className='menu-button'
                    value='category'
                    onMouseOver={handleShow}> 
                    Category
                </Button>
                
            </div>
            <div className='menu-btn-container'>
                <Button 
                    value='feature'
                    className='menu-button'
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