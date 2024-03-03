import React from 'react';
import { Typography, Avatar, Box, Button } from '@mui/material';

const ProfileSection = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar sx={{ width: 56, height: 56, marginRight: 2 }}>U</Avatar>
      <Box>
        <Typography variant="h6">Elon Musk</Typography>
        <Typography variant="subtitle2">elonmusk.@gmail.com</Typography>
        <Button variant="outlined" size="small" sx={{ marginTop: 1 }}>
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSection;
