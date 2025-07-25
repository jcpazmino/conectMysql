const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { pool, checkConnection } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3300;

// Middleware básico
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    message: 'API de Finanzas - MySQL',
    version: '1.0.0',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});


// Ruta para probar conexión a la base de datos
app.get('/api/test-db', async (req, res) => {
  try {
    const isConnected = await checkConnection();
    if (isConnected) {
      // Probar una consulta simple
      const [rows] = await pool.execute('SELECT 1 as test');
      res.json({
        success: true,
        message: 'Conexión a la base de datos exitosa',
        data: {
          connected: true,
          testQuery: rows[0],
          database: process.env.DB_NAME,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT
        }
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'No se pudo conectar a la base de datos',
        data: { connected: false }
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al probar la conexión',
      error: error.message
    });
  }
});

// Iniciar servidor
app.listen(PORT, async () => {
  try {
    const isConnected = await checkConnection();
    if (isConnected) {
      console.log('✅ Conexión a la base de datos establecida correctamente');
    } else {
      console.log('❌ No se pudo establecer conexión a la base de datos');
    }
  } catch (error) {
    console.log('❌ Error al probar conexión:', error.message);
  }
});

module.exports = app;
