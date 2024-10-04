import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  return (
    <Typography variant="h4">Course Details for Course ID: {id}</Typography>
  );
};

export default CourseDetail;
