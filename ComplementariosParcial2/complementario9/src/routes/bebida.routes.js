const { Router } = require('express');

module.exports = function ({ BebidaController }) {
    const router = Router();
    router.get('/:bebidaId', BebidaController.get);
    router.get('', BebidaController.getAll);
    router.post('/', BebidaController.create);
    router.patch('/:bebidaId', BebidaController.update);
    router.delete('/:bebidaId', BebidaController.delete);

    return router;
}
