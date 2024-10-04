import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2024 E-learning Platform. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
