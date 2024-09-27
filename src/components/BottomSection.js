import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderSection = () => (
  <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
    <Typography sx={{ fontSize: '14px', marginTop: '85px' }} component="p" gutterBottom>
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
    </Typography>
  </Box>
);

export default HeaderSection;
