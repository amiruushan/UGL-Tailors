import React from 'react';
import { Box, Typography,Button,Grid,Paper,List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import backgroundImage from '../assets/CoverPage.jpg';
import uniform from '../assets/uniform.png';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function HomePage() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",p:{xs:0, sm:0},minHeight: '100vh',mb:0,}}>
      {/* background image */}
      <Box sx={{flex:1}}>
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
          backgroundAttachment:'fixed',
          display:'flex'
        }}>
          <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'flex-start',alignContent:'flex-start',justifyContent:'center' ,bgcolor:'rgba(0,0,0,0.6)',pl:8}}>
            <Typography variant='h1' sx={{ fontFamily:'unset',color: '#fff' ,fontWeight:'600',textAlign: { xs: 'center', md: 'left' },fontSize: { xs: 40, sm: 60, md: 90 }, }}>Precision Tailoring for KDU &<br></br> Sri Lankan Army</Typography>
            <Typography variant='h3' sx={{ fontFamily: 'inherit',color: '#fff',fontWeight:'300',fontSize:40 }}>Unite in Style Lead With Honour</Typography>
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
          <Typography variant="h4" fontWeight="bold">Tailored to Serve. Designed to Fit.</Typography>
          <hr className="border-t border-black my-4 w-[75%] mx-auto" />

          <div className='flex flex-row justify-evenly'>
            <Box sx={{width:'450px',height:'300px', background:'#EEEFE0', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex'}}>
              <div className='w-[50%] flex flex-col justify-center items-start'>
                <Typography variant='h4' sx={{fontWeight:'bold', alignItems:'center'}}>Tailored Uniforms</Typography>
                <Typography variant='body2'>Includes all full clothing sets and core wearables</Typography>
                <Button endIcon={<NavigateNextIcon/>} href='/store'>Visit Store</Button>
              </div>
              <Box
                sx={{
                  width: '50%',
                  backgroundImage: `url(${uniform})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0 16px 16px 0'
                }}
              />
            </Box>

            <Box sx={{width:'450px',height:'300px', background:'#EEEFE0', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex'}}>
              <div className='w-[50%] flex flex-col justify-center items-start'>
                <Typography variant='h4' sx={{fontWeight:'bold'}}>Accessories</Typography>
                <Typography variant='body2'>Includes all smaller gear, decorations, and wearable additions</Typography>
                <Button endIcon={<NavigateNextIcon/>} href='/store'>Visit Store</Button>
              </div>
              <Box
                sx={{
                  width: '50%',
                  backgroundImage: `url(${uniform})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0 16px 16px 0' // match rounding on the right side
                }}
              />
            </Box>

            <Box sx={{width:'450px',height:'300px', background:'#EEEFE0', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex'}}>
              <div className='w-[50%] flex flex-col justify-center items-start'>
                <Typography variant='h4' sx={{fontWeight:'bold'}}>Footwear & Care</Typography>
                <Typography variant='body2'>Includes shoes, socks, and maintenance gear</Typography>
                <Button endIcon={<NavigateNextIcon/>} href='/store'>Visit Store</Button>
              </div>
              <Box
                sx={{
                  width: '50%',
                  backgroundImage: `url(${uniform})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0 16px 16px 0' // match rounding on the right side
                }}
              />
            </Box>
          </div>

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
    </Box>
  );
}
