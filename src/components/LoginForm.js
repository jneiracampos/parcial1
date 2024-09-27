import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('El correo no tiene un formato válido');
    } else if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setError('');
      onLoginSuccess();
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
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
        <Typography variant="h5" component="h2" gutterBottom>
          Inicio de sesión
        </Typography>

        {error && <Typography color="error" gutterBottom>{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '15px' }}>
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ marginBottom: '15px' }}>
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '48%', backgroundColor: 'blue', color: 'white' }}
            >
              Ingresar
            </Button>
            <Button
              variant="contained"
              sx={{ width: '48%', backgroundColor: 'red', color: 'black' }}
            >
              Cancelar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
