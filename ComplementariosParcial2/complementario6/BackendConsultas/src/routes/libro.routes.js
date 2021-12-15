const { Router } = require("express");

module.exports = function({ LibroController }) {
    const router = Router();
    router.post("/nuevolibro", LibroController.nuevolibro);
    router.get("/consultarlibro/:id", LibroController.consultarlibro);
    router.patch("/updatelibro/:id", LibroController.updatelibro);
    router.delete("/deletelibro/:id", LibroController.deletelibro);
    router.get("/buscarlibro/:search", LibroController.buscarlibro);
    return router;
}