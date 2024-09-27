import React from 'react';
import { Box } from '@mui/material';
import HeaderSection from '../components/HeaderSection';
import BottomSection from '../components/BottomSection';

const MainComponent = ({ children }) => (
  <Box className="main-container" sx={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
    <HeaderSection />
    {children}
    <BottomSection />
  </Box>
);

export default MainComponent;
