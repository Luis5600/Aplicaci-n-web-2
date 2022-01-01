const mongoose = require("mongoose");
const { Schema } = mongoose;
const PrestamoSchema = new Schema({
    cliente_id: { type: Schema.Types.ObjectId },
    libros_id: [{ type: Schema.Types.ObjectId }],
    fecha_devolucion: { type: String },
    activo: { type: Boolean }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})
module.exports = mongoose.model("Prestamos", PrestamoSchema);