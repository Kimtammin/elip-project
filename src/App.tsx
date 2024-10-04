import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Courses from './pages/course/Courses';
import CourseDetail from './pages/course/CourseDetail';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {' '}
          {/* main layout Route*/}
          <Route path="/" element={<Home />} /> {/* home component Route*/}
          <Route path="/courses" element={<Courses />} />{' '}
          {/* courses component Route*/}
          <Route path="/course/:id" element={<CourseDetail />} />{' '}
          {/* course detail component Route*/}
        </Route>
        <Route element={<DashboardLayout />}>
          {' '}
          {/* dashboard layout Route*/}
          <Route path="/dashboard" element={<Dashboard />} />{' '}
          {/*  dashboard component Route*/}
          <Route path="/profile" element={<Profile />} />{' '}
          {/* profile component Route*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
