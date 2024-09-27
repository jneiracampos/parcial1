import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HeaderSection = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>

      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} gutterBottom>
        Adopta un Robot con Robot Lovers!
      </Typography>

      <Box className="image-container" sx={{ marginBottom: '20px' }}>
        <img src="/images/image.png" alt="Robot Lovers Banner" style={{ width: '100%', height: 'auto' }} />
      </Box>

      <Box sx={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '10px' }}>
        <Button onClick={() => changeLanguage('es')} sx={{ color: 'black', fontWeight: 'bold' }}>ESPAÑOL</Button>
        <Button onClick={() => changeLanguage('en')} sx={{ color: 'black', fontWeight: 'bold' }}>ENGLISH</Button>
      </Box>
    </Box>
  );
};

export default HeaderSection;
