import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Journey Summary</Title>
      <Typography component="p" variant="h4">
        30%
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Drowsiness
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Performance
        </Link>
      </div>
    </React.Fragment>
  );
}