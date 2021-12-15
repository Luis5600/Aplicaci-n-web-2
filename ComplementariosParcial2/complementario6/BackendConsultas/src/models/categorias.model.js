const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoriaSchema = new Schema({
    categorianame: { type: String }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Categorias", CategoriaSchema);