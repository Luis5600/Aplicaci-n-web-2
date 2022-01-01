const mongoose = require("mongoose");
const { Schema } = mongoose;

const LibroSchema = new Schema({
    titulo: { type: String },
    autor: { type: String },
    categoria: [String],
    enlacePortada: { type: String },
    cantidad: { type: Number },
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Libros", LibroSchema);