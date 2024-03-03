import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import { styled } from '@mui/system';

import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0, '2 Mar, 2024', 'Elvis Presley', 'Tupelo, MS', 312.44),
  createData(1, '2 Mar, 2024', 'Paul McCartney', 'London, UK', 866.99),
  createData(2, '2 Mar, 2024', 'Tom Scholz', 'Boston, MA', 100.81),
  createData(3, '2 Mar, 2024', 'Michael Jackson', 'Gary, IN', 654.39),
  createData(4, '1 Mar, 2024', 'Bruce Springsteen', 'Long Branch, NJ', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const CustomCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Use theme.spacing for consistent spacing
}));

export default function CustomCardList() {
  return (
    <React.Fragment>
      <Title>Drivers</Title>
      {rows.map((row) => (
        <CustomCard key={row.id}>
          <CardContent>
            <Typography variant="h6">{row.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Date: {row.date}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              From: {row.shipTo}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rating: {row.amount}
            </Typography>
            <Button size="small" color="primary" onClick={preventDefault}>
              Show more
            </Button>
          </CardContent>
        </CustomCard>
      ))}
      <Button color="primary" href="#" onClick={preventDefault}>
        See more orders
      </Button>
    </React.Fragment>
  );
}
