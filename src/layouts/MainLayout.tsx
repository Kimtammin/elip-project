import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
