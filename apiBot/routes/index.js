const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

// Función recursiva para obtener todos los archivos en las subcarpetas
const loadRoutes = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // Si es una carpeta, llamamos recursivamente a la función para explorarla
            loadRoutes(fullPath);
        } else {
            const name = removeExtension(path.relative(PATH_ROUTES, fullPath));
            if (name !== 'index') {
                console.log(`Cargando ruta ${name}`);
                router.use(`/${name}`, require(fullPath));
            }
        }
    });
}

// Llamada inicial para cargar las rutas
loadRoutes(PATH_ROUTES);

module.exports = router;


/**
 * codigo anterior
 */

// const express = require("express");
// const fs = require("fs")
// const router = express.Router();

// const PATH_ROUTES = __dirname;

// const removeExtension = (fileName) => {
//     return fileName.split('.').shift()
// }

// fs.readdirSync(PATH_ROUTES).filter((file) => {
//     const name = removeExtension(file)
//     if(name !== 'index'){
//         console.log(`Cargando ruta ${name}`)
//         router.use(`/${name}`,require(`./${file}`))
//     }
// })

// module.exports = router