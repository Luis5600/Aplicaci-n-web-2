const mongoose = require("mongoose");
const { Schema } = mongoose;

const PreguntafrecSchema = new Schema({
    pregunta: { type: String },
    respuesta: { type: String }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Preguntasfrec", PreguntafrecSchema);