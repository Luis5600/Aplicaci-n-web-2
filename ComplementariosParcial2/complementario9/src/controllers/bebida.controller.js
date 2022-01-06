let _bebidaService = null;

class BebidaController {
    constructor({ BebidaService }) {
        _bebidaService = BebidaService;
    }
    // get
    async get(req, res) {
        const { bebidaId } = req.params;
        const bebida = await _bebidaService.get(bebidaId);
        return res.send(bebida);
    }

    // getAll
    async getAll(req, res) {
        const bebidas = await _bebidaService.getAll();
        return res.send(bebidas);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdBebida = await _bebidaService.create(body);
        return res.send(createdBebida);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { bebidaId } = req.params;
        const updatedBebida = await _bebidaService.update(bebidaId, body);
        return res.send(updatedBebida);
    }

    // delete
    async delete(req, res) {
        const { bebidaId } = req.params;
        const deletedBebida = await _bebidaService.delete(bebidaId);
        return res.send(deletedBebida);

    }
}

module.exports = BebidaController;