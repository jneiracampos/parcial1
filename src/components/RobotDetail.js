import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RobotDetail = ({ robot }) => {
  if (!robot) return null;

  return (
    <Card sx={{ width: '35%' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {robot.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
          <img
            src={`/images/${robot.nombre.toLowerCase()}.png`}
            alt={robot.nombre}
            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
        </Typography>
        <Typography variant="body2">
          <strong>→ Año de Fabricación:</strong> {robot.detalle.año} <br />
          <strong>→ Capacidad de Procesamiento:</strong> {robot.detalle.capacidad} <br />
          <strong>→ Humor:</strong> {robot.detalle.humor}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RobotDetail;
