const { Preguntasfrec } = require("../models");
var { mongo } = require('mongoose');
class PreguntafrecService {
    nuevaPreguntafrec(req, res) {
        console.log(req.body);
        const Preguntafrec = {
            pregunta: req.body.pregunta,
            respuesta: req.body.respuesta
        }
        try {
            Preguntasfrec.create(Preguntafrec);
            return res.status(201).send({ message: "Preguntafrec agregado" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear el Preguntafrec" });
        }
    }
    consultarPreguntasfrec(req, res) {
        try {
            Preguntasfrec.find({}, function(err, preguntasfrec) {
                if (err) {
                    return res.status(500).send({ message: "Error al buscar las Preguntasfrec" });
                }
                if (!preguntasfrec) {
                    return res.status(404).send({ message: 'Preguntasfrec no encontradas' })
                } else {
                    return res.status(200).send(preguntasfrec);
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al buscar la Preguntafrec" });
        }
    }
    updatePreguntafrec(req, res) {
        console.log(req.params.id);
        try {
            Preguntasfrec.findOneAndUpdate({ '_id': mongo.ObjectId(req.params.id) }, { '$set': req.body }, function(err, preguntafrec) {
                if (err) {
                    return res.status(500).send({ message: "Error al actualizar la Preguntafrec" });
                }
                if (!preguntafrec) {
                    return res.status(404).send({ message: 'Preguntafrec no encontrado' })
                } else {
                    return res.status(200).send({ message: 'Preguntafrec Actualizada' });
                }
            })

        } catch (err) {
            return res.status(500).send({ message: "Error al actualizar la Preguntafrec" });
        }
    }
    deletePreguntafrec(req, res) {
        console.log(req.params.id);
        try {
            Preguntasfrec.deleteOne({ '_id': mongo.ObjectId(req.params.id) }, function(err, result) {
                if (err) {
                    return res.status(500).send({ message: "Error al eliminar la Preguntafrec" });
                }
                if (result.n == 0) {
                    return res.status(404).send({ message: 'Preguntafrec no encontrada' })
                } else {
                    return res.status(200).send({ message: 'Preguntafrec Eliminada' });
                }
            })
        } catch (err) {
            return res.status(500).send({ message: "Error al eliminar la Preguntafrec" });
        }
    }
}
module.exports = PreguntafrecService;