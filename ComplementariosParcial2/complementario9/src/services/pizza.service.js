const BaseService = require('./base.service')
let _pizzaRepository = null;

class PizzaService extends BaseService {
    constructor({ PizzaRepository }) {
        super(PizzaRepository);
        _pizzaRepository = PizzaRepository;
    }
    async getPizzaByPizzaName(pizaname) {
        return await _pizzaRepository.getPizzaByPizzaName(pizaname);
    }
}

module.exports = PizzaService;