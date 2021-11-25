const { Gasolinera } = require("../models");
var { mongo } = require('mongoose');
class GasolineraService {
    nuevaGasolinera(req, res) {
        var hora=req.body.hora.split(":")
        var horastr= hora[0]+hora[1];
        console.log(req.body);
        const gasolinera = {   
            Placa: req.body.placa,
            Tipo: req.body.tipo,
            Galones: req.body.galones,
            Costo: req.body.costo,
            Total: req.body.total,
            Hora: parseInt(horastr),
            Tipodenovedad: req.body.tipodenovedad,
        }
        try {
            Gasolinera.create(gasolinera);
            return res.status(201).send({ message: "Gasolinera agregada" });
        } catch (err) {
            return res.status(500).send({ message: "Error al crear la Gasolinera" });
        }
    }
    consultarGasolinera(req, res) {
        let resp = [];
        try {
            Gasolinera.find({}, function(err, gasolinera) {
                if (err) {
                    return res.status(500).send({ message: "Error al buscar las Gasolinera" });
                }
                if (!gasolinera) {
                    return res.status(400).send({ message: 'Gasolinera no encontrados' })
                } else {
                    gasolinera.forEach(gasolinera => {
                        if(gasolinera.Tipo == 'Extra' && gasolinera.Hora>2100 && gasolinera.Tipodenovedad !='ninguna'){
                            resp.push(gasolinera);
                        }
                    })
                return res.status(200).send(resp);
                }
            })
        } catch (err) {
            return res.status(500).send({ message: "Error al buscar las Gasolinera" });
        }
    }   
}

module.exports = GasolineraService;