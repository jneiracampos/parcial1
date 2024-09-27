import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderSection = () => (
  <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Adopta un Robot con Robot Lovers!
    </Typography>
    <Box className="image-container" sx={{ marginBottom: '20px' }}>
      <img src="/images/image.png" alt="Robot Lovers Banner" style={{ width: '100%', height: 'auto' }} />
    </Box>
  </Box>
);

export default HeaderSection;
