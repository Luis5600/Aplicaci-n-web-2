const { Router } = require("express");

module.exports = function({ PrestamoController }) {
    const router = Router();
    router.post("/nuevoprestamo", PrestamoController.nuevoprestamo);
    router.get("/consultarprestamo/:id", PrestamoController.consultarprestamo);
    router.patch("/updateprestamo/:id", PrestamoController.updateprestamo);
    router.delete("/deleteprestamo/:id", PrestamoController.deleteprestamo);
    router.get("/prestamosActivos/:identificacion", PrestamoController.prestamosActivos);
    return router;
}