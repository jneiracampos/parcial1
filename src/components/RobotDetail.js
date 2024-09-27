import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RobotDetail = ({ robotId }) => {
  const { t } = useTranslation();
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchRobotDetail = async () => {
      if (!robotId) return;
      
      try {
        const response = await fetch(`http://localhost:3001/robots/${robotId}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del robot');
        }
        const data = await response.json();
        setRobot(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRobotDetail();
  }, [robotId]); // Ejecutar cuando cambie el ID del robot

  if (error) return <p>{error}</p>;
  if (!robot) return null;

  const robotImageUrl = robot.imagen.startsWith('https://github.com') 
  ? robot.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')
  : robot.imagen;

  return (
    <Card sx={{ width: '35%', backgroundColor: '#f2f2f2', border: '1px solid black' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {robot.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
          <img
            src={robotImageUrl}
            alt={robot.nombre}
            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
        </Typography>
        <Typography variant="body2">
          <strong>→ {t('yearOfManufacture')}:</strong> {robot.añoFabricacion} <br />
          <strong>→ {t('processingCapacity')}:</strong> {robot.capacidadProcesamiento} <br />
          <strong>→ {t('humor')}:</strong> {robot.humor}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RobotDetail;
