const express = require("express");
const { sequelize, syncDatabase, User, Card, Transaction } = require("./models");


const app = express();
const PORT = 3001; // Puedes cambiar el puerto si lo necesitas



app.use(express.json()); // Permite leer JSON en las solicitudes

sequelize.sync({ force: true }) // `force: true` elimina y vuelve a crear las tablas (solo en desarrollo)
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(err => console.error('Error al sincronizar la base de datos', err));

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡Hola, backend en Node.js funcionando!");
});

app.get("/get-user-cards", (req, res) => {
    let userCards = {
    }
    res.send("")
});

app.get("/store-movements", (req, res) => {

});

// Iniciar el servidor
app.listen(PORT, async () => {
    await syncDatabase(); // Sincroniza la DB antes de aceptar peticiones
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
