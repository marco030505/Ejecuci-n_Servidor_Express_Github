const express = require("express");
const pool = require("./db");
const app = express();

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.get("/alumnos", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM alumno");
    res.json(resultado.rows);
  } catch (error) {
    console.error("Error al consultar alumnos:", error);
    res.status(500).json({ error: "Error al obtener los alumnos" });
  }
});

app.get("/usuario", (req, res) => {
  const usuario = {
    id: 1,
    nombre: "Marco",
    rol: "Administrador",
  };

  res.json(usuario);
});

pool
  .connect()
  .then(() => {
    console.log("Conexión exitosa a PostgresSQL");
  })
  .catch((err) => {
    console.error("Error de conexión ", err);
  });

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});


//Como estas marco Buenos dias, estoy haciendo prueba.