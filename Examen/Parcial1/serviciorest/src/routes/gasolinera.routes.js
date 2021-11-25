const { Router } = require("express");

module.exports = function({ GasolineraController }) {
    const router = Router();
    router.post("/nuevagasolinera", GasolineraController.nuevagasolinera);
    router.get("/consultargasolinera", GasolineraController.consultargasolinera);
    return router;
}