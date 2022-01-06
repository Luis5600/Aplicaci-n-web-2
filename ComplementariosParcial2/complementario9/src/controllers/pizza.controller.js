let _pizzaService = null;

class PizzaController {
    constructor({ PizzaService }) {
        _pizzaService = PizzaService;
    }
    // get
    async get(req, res) {
        const { pizzaId } = req.params;
        const pizza = await _pizzaService.get(pizzaId);
        return res.send(pizza);
    }

    // getAll
    async getAll(req, res) {
        const pizza = await _pizzaService.getAll();
        return res.send(pizza);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdPizza = await _pizzaService.create(body);
        return res.send(createdPizza);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { pizzaId } = req.params;
        const updatedPizza = await _pizzaService.update(pizzaId, body);
        return res.send(updatedPizza);
    }

    // delete
    async delete(req, res) {
        const { pizzaId } = req.params;
        const deletedPizza = await _pizzaService.delete(pizzaId);
        return res.send(deletedPizza);

    }
}

module.exports = PizzaController;