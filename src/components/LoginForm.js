import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess();
      } else {
        setError(data.message || 'Error de autenticación. Revise sus credenciales.');
      }
    } catch (err) {
      setError('Error de red. Intente nuevamente más tarde.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box className="login-box" sx={{ width: '60%', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} gutterBottom>
          Inicio de sesión
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '15px' }}>
            <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>
              Nombre de usuario
            </Typography>
            <TextField
              label=""
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ backgroundColor: '#f0f0f0' }}
            />
          </Box>
          <Box sx={{ marginBottom: '15px' }}>
            <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>
              Contraseña
            </Typography>
            <TextField
              label=""
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ backgroundColor: '#f0f0f0' }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '48%', backgroundColor: 'blue', color: 'white', fontWeight: 'bold' }}
            >
              Ingresar
            </Button>
            <Button
              variant="contained"
              sx={{ width: '48%', backgroundColor: 'red', color: 'black', fontWeight: 'bold' }}
            >
              Cancelar
            </Button>
          </Box>

          {error && (
            <Typography
              variant="body2"
              sx={{ color: 'red', fontWeight: 'bold', textAlign: 'left', marginTop: '15px' }}
            >
              {error}
            </Typography>
          )}

        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
