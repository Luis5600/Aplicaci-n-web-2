const { Router } = require("express");
module.exports = function({ CategoriaController }) {
    const router = Router();
    router.post("/nuevacategoria", CategoriaController.nuevacategoria);
    router.get("/consultarcategoria/:id", CategoriaController.consultarcategoria);
    router.patch("/updatecategoria/:id", CategoriaController.updatecategoria);
    router.delete("/deletecategoria/:id", CategoriaController.deletecategoria);
    return router;
}