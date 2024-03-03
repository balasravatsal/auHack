import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <Box
      textAlign="center"
      padding="20px"
      border="2px solid #ccc"
      borderRadius="5px"
      maxWidth="500px"
      margin="0 auto"
    >
      <Typography variant="h6">Time: {time}s</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
        <Button onClick={handleStartStop} style={{ backgroundColor: running ? 'red' : 'green', color: 'white' }}>
          {running ? 'Stop' : 'Start'}
        </Button>
        <Button onClick={handleReset} style={{ backgroundColor: 'green', color: 'white' }}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default Stopwatch;
