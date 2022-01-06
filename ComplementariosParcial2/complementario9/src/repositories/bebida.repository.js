const BaseRepository = require('./base.repository');
let _bebida= null;

class BebidaRepository extends BaseRepository {
    constructor({Bebida}){
        super(Bebida);
        _bebida = Bebida
    }
    async getBebidaByBebidaName(bebidaname){
        return await _bebida.findOne({bebidaname});
    }
}

module.exports = BebidaRepository;