import React from 'react';
import {Avatar, Box, Typography,Button,Grid,Paper,List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import backgroundImage from '../assets/CoverPage.jpg';
import uniform from '../assets/uniform.png';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import dummy2 from '../assets/dummy2.png';

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
          <hr className="border-t border-black my-4 w-[75%] mx-auto pb-4" />

          <div className='flex flex-row justify-evenly'>
            <Box sx={{width:'450px',height:'300px', background:'#F8FAFC', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'}}>
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

            <Box sx={{width:'450px',height:'300px', background:'#F8FAFC', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'}}>
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

            <Box sx={{width:'450px',height:'300px', background:'#F8FAFC', textAlign:'left',alignContent:'center',borderRadius: '16px',padding:2,display:'flex', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'}}>
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

        {/* lassana phrase*/}
        <Box sx={{position:'relative', display:'flex',flexDirection:'row', py: 6,p:4,width:'100%', maxWidth:'none'}}>
          <Box sx={{display:'flex',flexDirection:'column',padding:6, width:'70%', background:'#B9D7EA',position:'relative',zIndex:1}}>
            <div className='w-[70%] flex flex-col justify-center items-start'>
              <Typography variant='h1' sx={{ fontFamily: "'Playfair Display', serif",fontWeight: 700,}}>We belive a great uniform isn't just worn - it's felt.</Typography>
              <Typography variant='h4' sx={{fontFamily: "'Lato', sans-serif",lineHeight: 1.6,}}>With attention to every detail, we tailor garments that balance tradition, comfort, and unmatched quality.</Typography>
            </div>
          </Box>
          <Box
            sx={{
              position:'absolute',
              top: '50%',
              left: '55%',
              transform: 'translateY(-50%)',
              width: '42%',
              height: '82%',
              backgroundImage: `url(${dummy2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
              zIndex: 2,
            }}
          />
        </Box>



        {/* testimonials */}
        <Box sx={{ py: 6, px: 3, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold">What Our Customers Say</Typography>
          <hr className="border-t border-black my-4 w-[75%] mx-auto pb-4" />
          <div className='flex flex-row justify-evenly'>
            <Box sx={{width:'400px',height:'auto', background:'#F8FAFC',borderRadius: '16px',padding:2,display:'flex',flexDirection:'column', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)'}}>
              <div className='w-[100%] flex flex-row items-center'>
                <div>
                  <Avatar alt='Sadaru Hansaka' src='dummy1' sx={{ width: 70, height: 70, margin: '0 auto', mb: 2 }}/>
                </div>
                <div className='flex flex-col justify-center items-start pl-3 mb-5'>
                  <Typography variant='h6' sx={{fontWeight:'bold', alignItems:'center'}}>Sadaru Hansaka</Typography>
                  <Typography variant='body2'>KDU Student</Typography>
                </div>
              </div>
              <Typography variant='body1'>"Excellent quality uniforms that perfectly match the regulations."</Typography>
            </Box>

            <Box sx={{width:'400px',height:'auto', background:'#F8FAFC',borderRadius: '16px',padding:2,display:'flex',flexDirection:'column', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)'}}>
              <div className='w-[100%] flex flex-row items-center'>
                <div>
                  <Avatar alt='Sadaru Hansaka' src='dummy1' sx={{ width: 70, height: 70, margin: '0 auto', mb: 2 }}/>
                </div>
                <div className='flex flex-col justify-center items-start pl-3 mb-5'>
                  <Typography variant='h6' sx={{fontWeight:'bold', alignItems:'center'}}>Sadaru Hansaka</Typography>
                  <Typography variant='body2'>KDU Student</Typography>
                </div>
              </div>
              <Typography variant='body1'>"Excellent quality uniforms that perfectly match the regulations."</Typography>
            </Box>

            <Box sx={{width:'400px',height:'auto', background:'#F8FAFC',borderRadius: '16px',padding:2,display:'flex',flexDirection:'column', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)'}}>
              <div className='w-[100%] flex flex-row items-center'>
                <div>
                  <Avatar alt='Sadaru Hansaka' src='dummy1' sx={{ width: 70, height: 70, margin: '0 auto', mb: 2 }}/>
                </div>
                <div className='flex flex-col justify-center items-start pl-3 mb-5'>
                  <Typography variant='h6' sx={{fontWeight:'bold', alignItems:'center'}}>Sadaru Hansaka</Typography>
                  <Typography variant='body2'>KDU Student</Typography>
                </div>
              </div>
              <Typography variant='body1'>"Excellent quality uniforms that perfectly match the regulations."</Typography>
            </Box>

            <Box sx={{width:'400px',height:'auto', background:'#F8FAFC',borderRadius: '16px',padding:2,display:'flex',flexDirection:'column', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)'}}>
              <div className='w-[100%] flex flex-row items-center'>
                <div>
                  <Avatar alt='Sadaru Hansaka' src='dummy1' sx={{ width: 70, height: 70, margin: '0 auto', mb: 2 }}/>
                </div>
                <div className='flex flex-col justify-center items-start pl-3 mb-5'>
                  <Typography variant='h6' sx={{fontWeight:'bold', alignItems:'center'}}>Sadaru Hansaka</Typography>
                  <Typography variant='body2'>KDU Student</Typography>
                </div>
              </div>
              <Typography variant='body1'>"Excellent quality uniforms that perfectly match the regulations."</Typography>
            </Box>
          </div>
        </Box>

      </Box>
    </Box>
  );
}
