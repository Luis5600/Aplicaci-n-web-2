let _gasolineraService = null;
class GasolineraController {
    constructor({ GasolineraService }) {
        _gasolineraService = GasolineraService;

    }
    nuevagasolinera(req, res) {
        return _gasolineraService.nuevaGasolinera(req, res);
    };
    consultargasolinera(req, res) {
        return _gasolineraService.consultarGasolinera(req, res);
    }
}

module.exports = GasolineraController;