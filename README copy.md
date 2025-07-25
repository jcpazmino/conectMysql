# API de Finanzas - MySQL

Una API REST simple construida con Node.js y Express para gestionar datos financieros con una base de datos MySQL.

## 📋 Descripción

Esta aplicación proporciona endpoints para acceder y gestionar la base de datos "finanzas" a través de una API REST. Está diseñada para ser simple, eficiente y fácil de usar.

## 🚀 Características

- **API REST** con Express.js
- **Conexión a MySQL** con pool de conexiones
- **CORS** habilitado para requests cross-origin
- **Variables de entorno** para configuración
- **Endpoints de prueba** para verificar conectividad
- **Recarga automática** con nodemon en desarrollo

## 🛠️ Tecnologías

- **Node.js** v22.15.0
- **Express.js** v4.18.2
- **MySQL2** v3.6.3 (driver de base de datos)
- **CORS** v2.8.5
- **dotenv** v16.3.1
- **nodemon** v3.0.1 (desarrollo)

## 📦 Instalación

1. Clona o descarga el proyecto
2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno en `.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=finanzas
PORT=3300
NODE_ENV=development
```

4. Asegúrate de que MySQL esté corriendo (Puerto 3306)

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

El servidor se iniciará en `http://localhost:3300`

## 📡 Endpoints

### Información de la API
```
GET /
```
Retorna información básica de la API, versión y estado.

**Respuesta:**
```json
{
  "message": "API de Finanzas - MySQL",
  "version": "1.0.0",
  "status": "OK",
  "timestamp": "2025-07-25T10:30:00.000Z"
}
```

### Prueba de Conexión a Base de Datos
```
GET /api/test-db
```
Verifica la conectividad con la base de datos MySQL.

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Conexión a la base de datos exitosa",
  "data": {
    "connected": true,
    "testQuery": { "test": 1 },
    "database": "finanzas",
    "host": "localhost",
    "port": "3306"
  }
}
```

## 🗄️ Base de Datos

- **Motor:** MySQL
- **Nombre:** finanzas
- **Puerto:** 3306
- **Tablas principales:** movimientosfijos, conceptos

### Configuración de Conexión

La aplicación utiliza un pool de conexiones MySQL2 con las siguientes características:
- **Límite de conexiones:** 10
- **Espera por conexiones:** Habilitado
- **Sin límite de cola**

## 📁 Estructura del Proyecto

```
finanzasMysql/
├── config/
│   └── database.js          # Configuración de base de datos
├── node_modules/
├── .env                     # Variables de entorno
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js               # Archivo principal del servidor
```

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `DB_HOST` | Host de la base de datos | localhost |
| `DB_PORT` | Puerto de MySQL | 3306 |
| `DB_USER` | Usuario de MySQL | root |
| `DB_PASSWORD` | Contraseña de MySQL | password |
| `DB_NAME` | Nombre de la base de datos | finanzas |
| `PORT` | Puerto del servidor | 3300 |
| `NODE_ENV` | Entorno de ejecución | development |

## 🚦 Estado del Servidor

Al iniciar, el servidor mostrará:
```
🚀 Servidor corriendo en http://localhost:3300
📊 Base de datos: finanzas
🔗 Host de BD: localhost:3306
⚡ Entorno: development

🔍 Probando conexión a la base de datos...
✅ Conexión a la base de datos establecida correctamente
```

## 🐳 Docker

Si estás usando MySQL en Docker:
```bash
docker run --name mysql-finanzas -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=finanzas -p 3306:3306 -d mysql:8.4.6
```

## 📝 Scripts Disponibles

- `npm start` - Ejecuta el servidor en modo producción
- `npm run dev` - Ejecuta el servidor en modo desarrollo con nodemon

## 🔄 Próximas Características

- Endpoints CRUD para tabla `movimientosfijos`
- Endpoints CRUD para tabla `conceptos`
- Validación de datos de entrada
- Manejo de errores mejorado
- Documentación automática con Swagger

## 🤝 Contribución

Este es un proyecto base. Para contribuir:
1. Haz fork del proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

**Autor:** Desarrollado para gestión de datos financieros  
**Versión:** 1.0.0  
**Última actualización:** Julio 2025
