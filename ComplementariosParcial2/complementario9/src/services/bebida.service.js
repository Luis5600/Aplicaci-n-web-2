const BaseService = require('./base.service')
let _bebidaRepository = null;

class BebidaService extends BaseService {
    constructor({ BebidaRepository }) {
        super(BebidaRepository);
        _bebidaRepository = BebidaRepository;
    }
    async getBebidaByBebidaName(bebidaname) {
        return await _bebidaRepository.getBebidaByBebidaName(bebidaname);
    }
}

module.exports = BebidaService;