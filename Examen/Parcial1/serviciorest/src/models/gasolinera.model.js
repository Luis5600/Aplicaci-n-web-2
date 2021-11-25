const mongoose = require("mongoose");
const { Schema } = mongoose;

const GasolineraSchema = new Schema({
    Placa: { type: String },
    Tipo: { type: String },
    Galones: { type: String },
    Costo: { type: String },
    Total: { type: String },
    Hora: { type: Number },
    Tipodenovedad: { type: String },
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Gasolinera", GasolineraSchema);