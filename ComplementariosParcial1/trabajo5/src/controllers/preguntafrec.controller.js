let _preguntafrecService = null;
class PreguntafrecController {
    constructor({ PreguntafrecService }) {
        _preguntafrecService = PreguntafrecService;
    }
    nuevapreguntafrec(req, res) {
        return _preguntafrecService.nuevaPreguntafrec(req, res);
    };
    consultarpreguntasfrec(req, res) {
        return _preguntafrecService.consultarPreguntasfrec(req, res);
    };
    updatepreguntafrec(req, res) {
        return _preguntafrecService.updatePreguntafrec(req, res);
    };
    deletepreguntafrec(req, res) {
        return _preguntafrecService.deletePreguntafrec(req, res);
    }
}

module.exports = PreguntafrecController;