const { Libros } = require("../models");
var { mongo } = require("mongoose");
class LibroService {
    nuevoLibro(req, res) {
        console.log(req.body);
        const Libro = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            categoria: req.body.categoria,
            enlacePortada: req.body.enlacePortada,
            cantidad: req.body.cantidad,
        };
        try {
            Libros.create(Libro);
            return res.status(201).send({ message: "Libro agregado" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear el libro" });
        }
    }
    consultarLibro(req, res) {
        console.log(req.params.id);
        try {
            Libros.findOne({ _id: mongo.ObjectId(req.params.id) },
                function(err, libro) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al buscar el libro" });
                    }
                    if (!libro) {
                        return res.status(404).send({ message: "Libro no encontrado" });
                    } else {
                        return res.status(200).send(libro);
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al buscar el libro" });
        }
    }
    updateLibro(req, res) {
        console.log(req.params.id);
        try {
            Libros.findOneAndUpdate({ _id: mongo.ObjectId(req.params.id) }, { $set: req.body },
                function(err, libro) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al actualizar el libro" });
                    }
                    if (!libro) {
                        return res.status(404).send({ message: "Libro no encontrado" });
                    } else {
                        return res.status(200).send({ message: "Libro Actualizado" });
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al actualizar el libro" });
        }
    }
    deleteLibro(req, res) {
        console.log(req.params.id);
        try {
            Libros.deleteOne({ _id: mongo.ObjectId(req.params.id) },
                function(err, result) {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al eliminar el libro" });
                    }
                    if (result.n == 0) {
                        return res.status(404).send({ message: "Libro no encontrado" });
                    } else {
                        return res.status(200).send({ message: "Libro Eliminado" });
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al eliminar el libro" });
        }
    }

    buscarLibro(req, res) {
        try {
            Libros.aggregate(
                [{
                        $search: {
                            text: {
                                query: req.params.search,
                                path: "titulo",
                            },
                        },
                    },
                    {
                        $project: {
                            titulo: 1,
                            autor: 1,
                            categoria: 1,
                            enlacePortada: 1,
                            cantidad: 1,
                            score: {
                                $meta: "searchScore",
                            },
                        },
                    },
                    {
                        $sort: {
                            score: -1,
                        },
                    },
                    {
                        $limit: 1,
                    },
                ],
                function(err, libro) {
                    console.log("libro encontrado");
                    console.log(libro);
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: "Error al Buscar el libro" });
                    }
                    if (!libro.length) {
                        return res.status(404).send({
                            message: "No se ha encontrado algun libro que coincida con la busqueda",
                        });
                    } else {
                        return res.status(200).send(libro[0]);
                    }
                }
            );
        } catch (err) {
            return res.status(500).send({ message: "Error al buscar libros" });
        }
    }
}
module.exports = LibroService;