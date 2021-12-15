const { Router } = require("express");

module.exports = function({ PreguntafrecController }) {
    const router = Router();
    router.post("/nuevapreguntafrec", PreguntafrecController.nuevapreguntafrec);
    router.get("/consultarpreguntasfrec", PreguntafrecController.consultarpreguntasfrec);
    router.patch("/updatepreguntafrec/:id", PreguntafrecController.updatepreguntafrec);
    router.delete("/deletepreguntafrec/:id", PreguntafrecController.deletepreguntafrec);
    return router;
}