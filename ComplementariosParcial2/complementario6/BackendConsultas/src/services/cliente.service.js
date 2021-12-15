const { Clientes } = require("../models");
var { mongo } = require('mongoose');
class ClienteService {
    nuevoCliente(req, res) {
        console.log(req.body);
        const Cliente = {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            identificacion: req.body.identificacion,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        }
        try {
            Clientes.create(Cliente);
            return res.status(201).send({ message: "Cliente agregado" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear el Cliente" });
        }
    }
    consultarCliente(req, res) {
        console.log(req.params.identificacion);
        try {
            Clientes.findOne({ 'identificacion': req.params.identificacion }, function(err, cliente) {
                if (err) {
                    return res.status(500).send({ message: "Error al buscar el Cliente" });
                }
                if (!cliente) {
                    return res.status(404).send({ message: 'Cliente no encontrado' })
                } else {
                    return res.status(200).send(cliente);
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al buscar el Cliente" });
        }
    }
    updateCliente(req, res) {
        console.log(req.params.identificacion);
        try {
            Clientes.findOneAndUpdate({ 'identificacion': req.params.identificacion }, { '$set': req.body }, function(err, cliente) {
                if (err) {
                    return res.status(500).send({ message: "Error al actualizar el Cliente" });
                }
                if (!cliente) {
                    return res.status(404).send({ message: 'Cliente no encontrado' })
                } else {
                    return res.status(200).send({ message: 'Cliente Actualizado' });
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al actualizar el Cliente" });
        }
    }
    deleteCliente(req, res) {
        console.log(req.params.identificacion);
        try {
            Clientes.deleteOne({ 'identificacion': req.params.identificacion }, function(err, result) {
                if (err) {
                    return res.status(500).send({ message: "Error al eliminar el Cliente" });
                }
                if (result.n == 0) {
                    return res.status(404).send({ message: 'Cliente no encontrado' })
                } else {
                    return res.status(200).send({ message: 'Cliente Eliminado' });
                }
            })
        } catch (err) {
            return res.status(500).send({ message: "Error al eliminar el Cliente" });
        }
    }
}

module.exports = ClienteService;