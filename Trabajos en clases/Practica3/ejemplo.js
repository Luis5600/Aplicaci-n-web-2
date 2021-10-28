const mongoose =  require("mongoose");
const conexion = `mongodb+srv://Usuarios:LUIS5600@cluster0.vcbvg.mongodb.net/AWII?retryWrites=true&w=majority`

mongoose.connect(conexion, { useNewUrlParser:true, useUnifiedTopology:true });


const Usuario =  mongoose.model("Usuario", { nombre:String });
const usuario1 = new Usuario({nombre:"Evelyn Valdez"});

usuario1.save()
Usuario.find().then(console.log)

