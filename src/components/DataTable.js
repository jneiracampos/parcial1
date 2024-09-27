import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import RobotDetail from './RobotDetail';

const robotsData = [
  {
    id: 1,
    nombre: 'Pedrito',
    modelo: 'PR-001',
    fabricante: 'Robotico Corp',
    detalle: {
      año: '2019',
      capacidad: '1.2 GHz',
      humor: 'Feliz y servicial, siempre dispuesto a ayudar en la cocina.',
    },
  },
  {
    id: 2,
    nombre: 'IronChef',
    modelo: 'IC-3000',
    fabricante: 'RoboCocina Inc.',
    detalle: {
      año: '2018',
      capacidad: '2.4 GHz',
      humor: 'Serio y eficiente, especializado en cocina automatizada.',
    },
  },
  {
    id: 3,
    nombre: 'Chispita',
    modelo: 'LT-007',
    fabricante: 'SparkBots Ltd',
    detalle: {
      año: '2020',
      capacidad: '1.8 GHz',
      humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curioso, siempre metiéndose en problemas "eléctricos".',
    },
  },
  {
    id: 4,
    nombre: 'SrCalculín',
    modelo: 'MC-808',
    fabricante: 'Mathematrix Solutions',
    detalle: {
      año: '2017',
      capacidad: '3.0 GHz',
      humor: 'Extremadamente lógico, siempre encuentra la solución perfecta a problemas matemáticos.',
    },
  },
  {
    id: 5,
    nombre: 'DoctoraBot',
    modelo: 'HL-9000',
    fabricante: 'MediTech Industries',
    detalle: {
      año: '2016',
      capacidad: '2.0 GHz',
      humor: 'Empática y cuidadosa, siempre lista para ayudar a los demás.',
    },
  },
  {
    id: 6,
    nombre: 'ZumbaTron',
    modelo: 'ZT-2025',
    fabricante: 'DanceTech Co.',
    detalle: {
      año: '2021',
      capacidad: '2.8 GHz',
      humor: 'Energético y entusiasta, siempre listo para una fiesta de baile.',
    },
  },
];

const DataTable = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRowClick = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {/* Tabla de robots */}
      <TableContainer component={Paper} sx={{ width: '60%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="robots table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>ID</strong></TableCell>
              <TableCell align="center"><strong>Nombre</strong></TableCell>
              <TableCell align="center"><strong>Modelo</strong></TableCell>
              <TableCell align="center"><strong>Empresa Fabricante</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {robotsData.map((robot) => (
              <TableRow
                key={robot.id}
                hover
                onClick={() => handleRowClick(robot)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell align="center">{robot.id}</TableCell>
                <TableCell align="center">{robot.nombre}</TableCell>
                <TableCell align="center">{robot.modelo}</TableCell>
                <TableCell align="center">{robot.fabricante}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Detalles del robot seleccionado */}
      <RobotDetail robot={selectedRobot} />
    </Box>
  );
};

export default DataTable;
