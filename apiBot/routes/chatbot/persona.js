const { Router } = require("express");
const { getPersonas, getApiCursos } = require("../../controllers/persona");


const router = Router()

/**
 * Ruta para obtener de persona
 */
router.get("/", getPersonas);
router.get("/productos", getApiCursos);


module.exports = router