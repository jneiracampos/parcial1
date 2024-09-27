import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import RobotDetail from './RobotDetail';
import { useTranslation } from 'react-i18next';

const DataTable = () => {
  const { t } = useTranslation();
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots');
        if (!response.ok) {
          throw new Error('Error al obtener los robots');
        }
        const data = await response.json();
        setRobots(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRobots();
  }, []);

  const handleRowClick = (robotId) => {
    setSelectedRobotId(robotId);
  };

  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {/* Tabla de robots */}
      <TableContainer component={Paper} sx={{ width: '64%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="robots table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'black' }}>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>{t('tableHeaderID')}</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>{t('tableHeaderName')}</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>{t('tableHeaderModel')}</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>{t('tableHeaderManufacturer')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {robots.map((robot) => (
              <TableRow
                key={robot.id}
                hover
                onClick={() => handleRowClick(robot.id)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>{robot.id}</TableCell>
                <TableCell align="center">{robot.nombre}</TableCell>
                <TableCell align="center">{robot.modelo}</TableCell>
                <TableCell align="center">{robot.empresaFabricante}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Detalles del robot seleccionado */}
      <RobotDetail robotId={selectedRobotId} />
    </Box>
  );
};

export default DataTable;
