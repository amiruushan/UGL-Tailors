import React from 'react';
import { Box, Typography, Button, Grid, Paper, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import aboutImage from '../assets/CoverPage.jpg'; // Placeholder image; replace with your image

export default function AboutUs() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: { xs: 2, sm: 3 } }}>
      {/* About Section */}
      <Box sx={{ py: 6, px: 3, textAlign: 'center', width: '100%', maxWidth: 'none' }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          About Us
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <img
                src={aboutImage}
                alt="Tailoring Excellence"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 8 }}
              />
            </Paper>
          </Grid>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' }, color: '#ccccccff' }}>
              Welcome to UGL Tailors, where precision meets passion in crafting uniforms and attire for the KDU
              community and the esteemed Sri Lankan Army. Established with a commitment to excellence, our skilled
              artisans bring decades of experience to every stitch, ensuring impeccable fits and durable designs
              tailored to your needs. From No6 kits for KDU students to ceremonial uniforms for the army, we pride
              ourselves on quality craftsmanship that reflects honor and style.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' }, color: '#ccccccff' }}>
              Our journey began with a vision to support the brave individuals who serve and learn, providing them
              with attire that boosts confidence and unity. We source the finest materials and employ modern
              techniques blended with traditional tailoring methods to deliver products that stand the test of time.
              At UGL Tailors, every garment tells a story of dedication and pride.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                component={Link}
                to="/store"
                variant="contained"
                startIcon={<StorefrontIcon />}
                sx={{
                  width: '200px',
                  backgroundColor: '#2c2929ff',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#71717A',
                    color: '#fff',
                  },
                }}
              >
                Visit Store
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  width: '200px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  '&:hover': {
                    backgroundColor: '#71717A',
                    color: '#fff',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Additional Info Section (Optional) */}
      <Box sx={{ py: 6, px: 3, textAlign: 'center', width: '100%', maxWidth: 'none', bgcolor: '#f5f5f5' }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
          At UGL Tailors, our mission is to empower the KDU students and Sri Lankan Army personnel with tailored
          solutions that enhance their professional appearance and morale. We strive to be the trusted name in
          military and educational attire, delivering excellence with every order.
        </Typography>
      </Box>
    </Box>
  );
}

