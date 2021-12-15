let _prestamoService = null;
class PrestamoController {
    constructor({ PrestamoService }) {
        _prestamoService = PrestamoService;
    }
    nuevoprestamo(req, res) {
        return _prestamoService.nuevoPrestamo(req, res);
    };
    consultarprestamo(req, res) {
        return _prestamoService.consultarPrestamo(req, res);
    };
    updateprestamo(req, res) {
        return _prestamoService.updatePrestamo(req, res);
    };
    deleteprestamo(req, res) {
        return _prestamoService.deletePrestamo(req, res);
    };
    prestamosActivos(req, res) {
        return _prestamoService.consultarprestamosActivoscliente(req, res);
    }
}
module.exports = PrestamoController;