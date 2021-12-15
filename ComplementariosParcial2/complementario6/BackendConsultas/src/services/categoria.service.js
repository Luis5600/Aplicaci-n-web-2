const { Categorias } = require("../models");
var { mongo } = require('mongoose');
class CategoriaService {
    nuevaCategoria(req, res) {
        console.log(req.body);
        const Categoria = {
            categorianame: req.body.categorianame,
        }
        try {
            Categorias.create(Categoria);
            return res.status(201).send({ message: "Categoria agregado" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear el Categoria" });
        }
    }
    consultarCategoria(req, res) {
        console.log(req.params.id);
        try {
            Categorias.findOne({ '_id': mongo.ObjectId(req.params.id) }, function(err, categoria) {
                if (err) {
                    return res.status(500).send({ message: "Error al buscar el Categoria" });
                }
                if (!categoria) {
                    return res.status(404).send({ message: 'Categoria no encontrada' })
                } else {
                    return res.status(200).send(categoria);
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al buscar la Categoria" });
        }
    }
    updateCategoria(req, res) {
        console.log(req.params.id);
        try {
            Categorias.findOneAndUpdate({ '_id': mongo.ObjectId(req.params.id) }, { '$set': req.body }, function(err, categoria) {
                if (err) {
                    return res.status(500).send({ message: "Error al actualizar la Categoria" });
                }
                if (!categoria) {
                    return res.status(404).send({ message: 'Categoria no encontrada' })
                } else {
                    return res.status(200).send({ message: 'Categoria Actualizada' });
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al actualizar la Categoria" });
        }
    }
    deleteCategoria(req, res) {
        console.log(req.params.id);
        try {
            Categorias.deleteOne({ '_id': mongo.ObjectId(req.params.id) }, function(err, result) {
                if (err) {
                    return res.status(500).send({ message: "Error al eliminar la Categoria" });
                }
                if (result.n == 0) {
                    return res.status(404).send({ message: 'Categoria no encontrada' })
                } else {
                    return res.status(200).send({ message: 'Categoria Eliminada' });
                }
            })
        } catch (err) {
            return res.status(500).send({ message: "Error al eliminar la Categoria" });
        }
    }
}
module.exports = CategoriaService;
