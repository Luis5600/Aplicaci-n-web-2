let _categoriaService = null;
class CategoriaController {
    constructor({ CategoriaService }) {
        _categoriaService = CategoriaService;
    }
    nuevacategoria(req, res) {
        return _categoriaService.nuevaCategoria(req, res);
    };
    consultarcategoria(req, res) {
        return _categoriaService.consultarCategoria(req, res);
    };
    updatecategoria(req, res) {
        return _categoriaService.updateCategoria(req, res);
    };
    deletecategoria(req, res) {
        return _categoriaService.deleteCategoria(req, res);
    }
}
module.exports = CategoriaController;