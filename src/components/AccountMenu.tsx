import * as React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth } from '../context';

function AccountMenu() {

    const { login, user, register, logout } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div id='account-menu'>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                
                <IconButton style={{ marginLeft: "16px" }}>
                    <FavoriteIcon style={{ color: 'pink'}}/>
                </IconButton>
                <IconButton style={{ marginLeft: "16px" }}>
                    <ShoppingCartIcon style={{ color: 'grey' }}/>
                </IconButton>
                <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}> {user?user.name.charAt(0):'?'} </Avatar>
                </IconButton>
                </Tooltip>
                <Typography sx={{ minWidth: 100 }}>
                    <Link style={{textDecoration: 'none'}} to='login'> { user?user.name:"Sign in"} </Link>
                </Typography>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Avatar /> <Link to='transaction'> Transaction History </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem  onClick={()=>{
                    setAnchorEl(null)
                    if(user !== null){
                        logout()
                        console.log("new logout:", user)
                    } else {
                        alert("No Sign in yet.")
                }}}>
                    
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>
        </div>
    )
    
}

export default AccountMenu;





    