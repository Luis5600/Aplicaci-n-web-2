const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombres: { type: String },
    apellidos: { type: String },
    identificacion: { type: String },
    telefono: { type: String },
    direccion: { type: String }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Clientes", ClienteSchema);