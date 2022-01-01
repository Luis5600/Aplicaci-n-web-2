const { Router } = require("express");

module.exports = function({ ClienteController }) {
    const router = Router();
    router.post("/nuevocliente", ClienteController.nuevocliente);
    router.get("/consultarcliente/:identificacion", ClienteController.consultarcliente);
    router.patch("/updatecliente/:identificacion", ClienteController.updatecliente);
    router.delete("/deletecliente/:identificacion", ClienteController.deletecliente);
    return router;
}