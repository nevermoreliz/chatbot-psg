require("dotenv").config();
const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ?? 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';




/**
 * Clase de API REST
 */
class ServerBotAPI {
  providerWS;
  providerDB;
  constructor(_providerWS, _providerDB) {
    this.providerWS = _providerWS;
    this.providerDB = _providerDB;
  }

  start() {
    const middleware = (req, _, next) => {
      req.ws = this.providerWS
      req.db = this.providerDB
      next()
    }

    app.use(cors());
    app.use(express.json());
    app.use(express.static("storage"));


    /**
     * Aqui invocamos a las rutas! 😎
     */
    app.use("/api", middleware, require("./routes"));
    // app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    app.listen(PORT, () => console.log(`http://localhost:${PORT}/api/qr`));
  }
}

module.exports = ServerBotAPI;
