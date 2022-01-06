const mongoose = require('mongoose');
const { Schema } = mongoose;

const BebidaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: String, required: true },
    cantidad: { type: String, required: true }
});

module.exports = mongoose.model("bebida", BebidaSchema);