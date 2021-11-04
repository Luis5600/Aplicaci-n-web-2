const mongoose = require('mongoose');
const {Schema} = mongoose;


const NoticiasSchema = new Schema(
    {
        titulo: {type:String},
        enlace: {type:String},
    },
    {
        timestamps: { createAt:true, updatedAt:true}
    }
)

module.exports = mongoose.model("Noticias", NoticiasSchema)