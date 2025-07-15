import React from 'react';
import { Box, Typography,Button,Grid,Paper,List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import backgroundImage from '../assets/CoverPage.jpg';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SchoolIcon from '@mui/icons-material/School';

export default function HomePage() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",p:{xs:2, sm:3}}}>
      {/* background image */}
      <Box sx={{
        position: 'flex',
        width:'100vw',
        height:'100vh',
        top: 150,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display:'flex'
      }}>
        <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'flex-start',alignContent:'flex-start',justifyContent:'center' ,bgcolor:'rgba(0,0,0,0.6)',pl:8}}>
          <Typography variant='h1' sx={{ fontFamily:'unset' ,fontWeight:'600',textAlign: { xs: 'center', md: 'left' },fontSize: { xs: 40, sm: 60, md: 90 }, }}>Precision Tailoring for KDU &<br></br> Sri Lankan Army</Typography>
          <Typography variant='h3' sx={{ fontFamily: 'inherit',fontWeight:'300',fontSize:40 }}>Unite in Style Lead With Honour</Typography>
          <Box sx={{display:'flex',gap: 2,flexDirection: { xs: 'column', sm: 'row' },}}>
            <Button component={Link} to="/store"
              variant="contained"
              startIcon={<StorefrontIcon />}
              sx={{
                width: '200px',          
                backgroundColor: '#2c2929ff',
                color: '#fff',            
                '&:hover': {
                  backgroundColor: '#71717A',
                  color:'#fff'
                },
                marginTop:3
              }}
            >
                Shop Now
            </Button>
            <Button component={Link} to="/about"
              variant="contained"
              sx={{
                width: '200px',          
                backgroundColor: '#ffffff',
                color: '#000000',            
                '&:hover': {
                  backgroundColor: '#71717A',
                  color:'#fff'
                },
                marginTop:3
              }}
            >
                Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* second pace - featured products */}
      <Box sx={{display:'flex',flexDirection:'column', py: 6, px: 3, textAlign: 'center',width:'100%', maxWidth:'none' }}>
        <Typography variant="h4" fontWeight="bold">Who We Serve</Typography>
        
        <Grid container spacing={4} sx={{ mt: 4,width:'100%' }} justifyContent="center" >
          {/* KDU Students */}
          <Grid item xs={12} sm={6} md={6} sx={{width:'40%'}}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '50%', 
                minHeight: '200px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}><SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />KDU Students</Typography>
              <List>
                {['No6 Kit', 'PT Uniform', 'Shoes', 'Accessories'].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon><FiberManualRecordIcon sx={{ fontSize: 8 }} /></ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Sri Lankan Army */}
          <Grid item xs={12} sm={6} md={6} sx={{width:'40%'}}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '50%', 
                minHeight: '200px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}><MilitaryTechIcon sx={{ verticalAlign: 'middle', mr: 1 }} />Sri Lankan Army</Typography>
              <List>
                {['No4 Uniform', 'Boots', 'Badges', 'Berets'].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon><FiberManualRecordIcon sx={{ fontSize: 8 }} /></ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Display popular Products List */}
      



      {/* testimonials */}
      <Box sx={{ py: 6, px: 3, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">What Our Customers Say</Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" italic>
            “Best place to get our KDU kits done, perfect fit and fast delivery!” – KDU Cadet
          </Typography>
          <Typography variant="body1" italic>
            “Best place to get our KDU kits done, perfect fit and fast delivery!” – KDU Cadet
          </Typography>
          <Typography variant="body1" italic>
            “Best place to get our KDU kits done, perfect fit and fast delivery!” – KDU Cadet
          </Typography>
          <Typography variant="body1" italic>
            “Best place to get our KDU kits done, perfect fit and fast delivery!” – KDU Cadet
          </Typography>
          <Typography variant="body1" italic>
            “Best place to get our KDU kits done, perfect fit and fast delivery!” – KDU Cadet
          </Typography>
        </Box>
      </Box>


    </Box>
  );
}
