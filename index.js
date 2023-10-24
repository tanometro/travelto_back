const port = 3001;
const {
  dataAttraction,
} = require("./src/controllers/attractions.controllers.js");
const server = require("./src/server");
const { conn } = require("./src/db");
require("./src/db");

conn
  .sync({ force: true })
  .then(async () => {
    try {
      await dataAttraction();
      console.log("Datos cargados en la base de datos.");

      // Iniciar el servidor después de cargar los datos
      server.listen(port, () => {
        console.log(`Servidor iniciado en el puerto: ${port}`);
      });
    } catch (error) {
      console.error("Error al cargar datos en la base de datos:", error);
    }
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
