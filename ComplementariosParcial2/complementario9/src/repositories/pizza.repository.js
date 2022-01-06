const BaseRepository = require('./base.repository');
let _pizza= null;

class PizzaRepository extends BaseRepository {
    constructor({Pizza}){
        super(Pizza);
        _pizza = Pizza
    }
    async getPizzaByPizzaName(pizzaname){
        return await _pizza.findOne({pizzaname});
    }
}

module.exports = PizzaRepository;