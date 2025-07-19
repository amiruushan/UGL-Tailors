import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  InputBase,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';


// Styled search components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid rgba(19, 12, 12, 0.3)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function NavBar() {
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log("Search:", query);
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#e5e5ebff', color: '#000000' }}>
        <Toolbar sx={{ display: 'flex', px: 2 }}>
          {/* Left: Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography  sx={{fontWeight: 600,color: '#000000'}} variant="h6" noWrap>
              UGL Tailors
            </Typography>
          </Box>

          {/* Center: Nav Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1,gap:3}}>
            {!isMobile && (
              <>
                <Button component={Link} to="/" sx={{color:'#000000',fontWeight: 500, '&:hover':{color:'#71717A',borderBottom: '2px solid #f5f5f5',} , borderBottom: location.pathname === '/' ? '3px solid #000000' : 'none',}}>Home</Button>
                <Button component={Link} to="/about" sx={{color:'#000000',fontWeight: 500, '&:hover':{color:'#71717A',borderBottom: '2px solid #f5f5f5',}, borderBottom: location.pathname === '/about' ? '3px solid #000000' : 'none',}}>About Us</Button>
                <Button component={Link} to="/store" sx={{color:'#000000',fontWeight: 500, '&:hover':{color:'#71717A',borderBottom: '2px solid #f5f5f5',}, borderBottom: location.pathname === '/store' ? '3px solid #000000' : 'none',}}>Store</Button>
                <Button component={Link} to="/contact" sx={{color:'#000000',fontWeight: 500, '&:hover':{color:'#71717A',borderBottom: '2px solid #f5f5f5',}, borderBottom: location.pathname === '/contact' ? '3px solid #000000' : 'none',}}>Contact Us</Button>
              </>
            )}
          </Box>

          {/* Right: Search + Profile */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
            {!isMobile ? (
              <>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <IconButton component={Link} to="/profile" color="inherit" sx={{'&:hover':{color:'#71717A'}}}>
                  <PersonIcon sx={{fontSize:30}}/>
                </IconButton>
                <IconButton component={Link} to="/cart" color="inherit" sx={{'&:hover':{color:'#71717A'}}}>
                  <ShoppingCartIcon />
                </IconButton>
              </>
            ) : (
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
