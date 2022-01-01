let _clienteService = null;
class ClienteController {
    constructor({ ClienteService }) {
        _clienteService = ClienteService;

    }
    nuevocliente(req, res) {
        return _clienteService.nuevoCliente(req, res);
    };
    consultarcliente(req, res) {
        return _clienteService.consultarCliente(req, res);
    };
    updatecliente(req, res) {
        return _clienteService.updateCliente(req, res);
    };
    deletecliente(req, res) {
        return _clienteService.deleteCliente(req, res);
    };
}

module.exports = ClienteController;