import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div>Sidebar 메뉴</div>
          </Grid>
          <Grid item xs={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardLayout;
