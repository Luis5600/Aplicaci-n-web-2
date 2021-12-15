const MongoClient = require("mongodb").MongoClient;
const MONGO_URI='mongodb+srv://Usuarios:LUIS5600@cluster0.vcbvg.mongodb.net/complementario4?retryWrites=true&w=majority';
// Create a new MongoClient
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Variables de exportacion de instancia
let instanciaMongo;

exports.conexion_mongodb = function () {
  return new Promise((resolve, reject) => {
    client.connect(function (err, resultConexionMongo) {
      if (err) {
        reject(err);
      } else {
        console.log("connecting to Database. ");
        instanciaMongo = resultConexionMongo;
        resolve();
      }
    });
  });
};

exports.getconexion_mongodb = function () {
  return instanciaMongo;
};

exports.closeconexion_mongodb = function () {
  // Close connection
  if (instanciaMongo) {
    console.log("Close Mongo");
    instanciaMongo.close();
  }
};