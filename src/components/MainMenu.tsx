import { Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react'
import Fade from '@mui/material/Fade';

function MainMenu({ message }: {message: string}) {
    const [anchorEl, setAnchorEl] = React.useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)


    const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    

    const handleClose = (event:React.MouseEvent<HTMLElement>) => {
            setAnchorEl(null)
    }
    


    const btnArr = ['Category', 'Brand']
    const menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']
    return (
        <div id='main-menu'> 
        {
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
        }
        </div>
    )
    
}

export default MainMenu;