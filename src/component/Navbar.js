import React, { useState } from 'react'
import logo from '../Assets/Logo.svg';
import {BsCart2} from 'react-icons/bs';
 import {HiOutlineBars3} from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { Box ,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Drawer} from '@mui/material';
import {Link} from 'react-router-dom';
export default function Navbar() {
  const [openMenu,setOpenMenu] = useState(false)
  const menuOption = [
    {
        text : 'Home',
        icon : <HomeIcon/>,

    },
    {
        text : 'About',
        icon : <InfoIcon/>,
        
    },
    {
        text : 'Testimonials',
        icon : <CommentRoundedIcon/>,
        
    },
    {
        text : 'Contact',
        icon : <PhoneRoundedIcon/>,
        
    },
    {
        text : 'Cart',
        icon : <ShoppingCartRounded/>,
        
    }
  ]
  return (
    <div>
      <nav>
        <div className="nav-logo-container">
            <img src= {logo} alt="no-logo" />
        </div>
        <div className="navbar-links-container">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/testimonial">Testimonals</Link>
              <a href="">Contact</a>
              <a href="">
                <BsCart2 className="navbar-cart-icon"/>
              </a>
           <button className='primary-button'>Booking Now</button>   
        </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=>setOpenMenu(true)}/>
      </div>
       <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor="right">
       <Box sx={{width:'250px'}}
       role='presentation'
       onClick={()=>setOpenMenu(false)}
       onKeyDown={()=>setOpenMenu(false)}
       >
         <List>
          {menuOption.map((items)=>(
            <ListItem key={items.text}>
                <ListItemButton>
                  <ListItemIcon>{items.icon}</ListItemIcon>
                  <ListItemText>{items.text}</ListItemText>
                </ListItemButton>
           </ListItem>
          ))}
         </List>
      </Box>
       </Drawer>
      </nav>
    </div>
  )
}
