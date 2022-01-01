let _libroService = null;
class LibroController {
    constructor({ LibroService }) {
        _libroService = LibroService;
    }
    nuevolibro(req, res) {
        return _libroService.nuevoLibro(req, res);
    };
    consultarlibro(req, res) {
        return _libroService.consultarLibro(req, res);
    };
    updatelibro(req, res) {
        return _libroService.updateLibro(req, res);
    };
    deletelibro(req, res) {
        return _libroService.deleteLibro(req, res);
    }
    buscarlibro(req, res) {
        return _libroService.buscarLibro(req, res);
    }
}
module.exports = LibroController;