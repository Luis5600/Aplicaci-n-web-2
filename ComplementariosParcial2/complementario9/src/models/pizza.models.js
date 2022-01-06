const mongoose = require("mongoose");



const PizzaSchema = new  mongoose.Schema (
    {   
        nombre: {type: String, required: true},
        tipo: { type: String, required: true},
        precio: { type: String, required: true},
        cantidad: { type: String, required: true}

    }
)

module.exports = mongoose.model("Pizza", PizzaSchema);
