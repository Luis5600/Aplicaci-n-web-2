const { Router } = require('express');
// const { UserController } = require('../controllers')

module.exports = function ({ PizzaController }) {
    const router = Router();
    router.get('/:pizzaId', PizzaController.get);
    router.get('', PizzaController.getAll);
    router.post('/', PizzaController.create);
    router.patch('/:pizzaId', PizzaController.update);    
    router.delete('/:pizzaId', PizzaController.delete);

    return router;
}
