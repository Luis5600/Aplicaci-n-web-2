const { Prestamos, Clientes } = require("../models");

var { mongo } = require('mongoose');
class PrestamoService {
    nuevoPrestamo(req, res) {
        console.log(req.body);
        const Prestamo = {
            cliente_id: req.body.cliente_id,
            libros_id: req.body.libros_id,
            fecha_devolucion: req.body.fecha_devolucion,
            activo: req.body.activo
        }
        try {
            Prestamos.create(Prestamo);
            return res.status(201).send({ message: "Prestamo agregado" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear el Prestamo" });
        }
    }
    consultarPrestamo(req, res) {
        console.log(req.params.id);
        try {
            Prestamos.findOne({ _id: mongo.ObjectId(req.params.id) },
                function(err, prestamo) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al buscar el prestamo" });
                    }
                    if (!prestamo) {
                        return res.status(404).send({ message: "Prestamo no encontrado" });
                    } else {
                        return res.status(200).send(prestamo);
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al buscar el prestamo" });
        }
    }

    consultarprestamosActivoscliente(req, res) {
        console.log(req.params.identificacion);
        let clienteid = '';
        try {
            Clientes.findOne({ 'identificacion': req.params.identificacion }, async function(err, cliente) {
                if (err) {
                    return res.status(500).send({ message: "Error al buscar el Cliente" });
                }
                if (!cliente) {
                    return res.status(404).send({ message: 'Cliente no encontrado' })
                } else {
                    clienteid = cliente._id;
                    console.log(clienteid);
                    await Prestamos.aggregate([{
                            $match: {
                                cliente_id: mongo.ObjectID(clienteid),
                                activo: true
                            },
                        },
                        {
                            $lookup: {
                                from: 'libros',
                                localField: 'libros_id',
                                foreignField: '_id',
                                as: 'libros'

                            },
                        },
                        {
                            $project: {
                                fecha_devolucion: 1,
                                libros: 1,
                            },
                        },
                    ], function(err, prestamos) {
                        if (err) {
                            return res
                                .status(500)
                                .send({ message: "Error al Buscar los prestamos " });
                        }
                        if (!prestamos.length) {
                            return res.status(404).send({
                                message: "No se ha encontrado algun prestamo que coincida con la busqueda",
                            });
                        } else {
                            return res.status(200).send(prestamos);
                        }
                    });


                }
            })
        } catch (err) {
            return res.status(500).send({ message: "Error al buscar el Cliente" });
        }
    }

    updatePrestamo(req, res) {
        console.log(req.params.id);
        try {
            Prestamos.findOneAndUpdate({ _id: mongo.ObjectId(req.params.id) }, { $set: req.body },
                function(err, prestamo) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al actualizar el prestamo" });
                    }
                    if (!prestamo) {
                        return res.status(404).send({ message: "Prestamo no encontrado" });
                    } else {
                        return res.status(200).send({ message: "Prestamo Actualizado" });
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al actualizar el prestamo" });
        }
    }
    deletePrestamo(req, res) {
        console.log(req.params.id);
        try {
            Prestamos.deleteOne({ _id: mongo.ObjectId(req.params.id) },
                function(err, result) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al eliminar el prestamo" });
                    }
                    if (result.n == 0) {
                        return res.status(404).send({ message: "Prestamo no encontrado" });
                    } else {
                        return res.status(200).send({ message: "Prestamo Eliminado" });
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al eliminar el prestamo" });
        }
    }

}
module.exports = PrestamoService;