// AboutUsPage.js
import React from 'react';
import { Grid, Card, CardMedia, CardActions, Button } from '@mui/material';

const teamMembers = [
  {
    name: 'Member 1',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Member 2',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Member 3',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Member 4',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Member 5',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  }
];

const AboutUsPage = () => {
  return (
    <Grid container spacing={3}>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={member.image}
              alt={member.name}
            />
            <CardActions>
              <Button variant="contained" href={member.linkedin} target="_blank">LinkedIn</Button>
              <Button variant="contained" href={member.github} target="_blank">GitHub</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutUsPage;
