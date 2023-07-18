import { Box, Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react'
import Fade from '@mui/material/Fade';


function MainMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)


    const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    

    const handleClose = (event:React.MouseEvent<HTMLElement>) => {
            setAnchorEl(null)
    }
    


    const btnArr = ['Category 1', 'Category 2', 'Category 3', 'Category 4']
    const menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']
    return (
        <div id='main-menu'> 
        {
            btnArr.map((category) => 
                <div 
                    style={{display:'inline'}}
                    key={category}
                    >
                    <Button 
                        onClick={handleOpen}
                        className='menu-button'> 
                        {category} 
                    </Button>
                    <Menu 
                        anchorEl={anchorEl}
                        open={open}
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
        }
        </div>
    )
    
}

export default MainMenu;