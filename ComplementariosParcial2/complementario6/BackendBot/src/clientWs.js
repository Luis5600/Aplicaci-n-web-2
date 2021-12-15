//Libreria para el bot
const {
  WAConnection,
  ReconnectMode,
  MessageType,
  Mimetype,
} = require("@adiwajshing/baileys");
//Libreria para realizar request
const got = require("got");
const { validarCedula } = require("./utils");
const client = new WAConnection();
const fs = require("fs");

function conectarCliente() {
  client.autoReconnect = ReconnectMode.onConnectionLost;
  fs.readFile("./src/auth_info.json", async (error, data) => {
    let auth;
    if (error) {
      console.log("no hay archivo de sesion");
      auth = null;
    } else {
      auth = JSON.parse(fs.readFileSync("./src/auth_info.json"));
      client.loadAuthInfo(auth);
    }
    if (auth === null) {
      client.on("open", () => {
        console.log("dentro del on");
        // save credentials whenever updated
        auth = client.base64EncodedAuthInfo(); // get all the auth info we need to restore this session
        console.log(auth);
        fs.writeFile(
          "./src/auth_info.json",
          JSON.stringify(auth, null, "\t"),
          (error) => {
            if (error) {
              console.log("error al crear el archivo auth");
            }
          }
        ); // save this info to a file
      });
    }
    onNewMessage();
    await client.connect(auth);
  });
}
function onNewMessage() {
  client.on("chat-update", async (chatUpdate) => {
    if (chatUpdate.messages && chatUpdate.count) {
      const m = chatUpdate.messages.all()[0];
      const mensaje = m.message.conversation;
      console.log(m.message.conversation);
      //comprobamos que se encuentre entre las opciones
      let contenido;
      let tipo = MessageType.text;
      let remoteJid = m.key.remoteJid;
      const options = { quoted: m };

      switch (mensaje) {
        case "1":
          response = await respuestaOpcion1(remoteJid, tipo, options);
          break;

        case "2":
          response = await respuestaOpcion2(remoteJid, tipo, options);
          break;

        case "3":
          response = await respuestaOpcion3(remoteJid, tipo, options);
          break;
        default:
          const opt = mensaje.trim().split(" ")[0].toLowerCase();
          switch (opt) {
            case "libro":
              const mensajeArreglo = mensaje.trim().split(" ");
              let libro = "";
              for (let i = 1, len = mensajeArreglo.length; i < len; i++) {
                if (libro.length == 0) {
                  libro = mensajeArreglo[i];
                } else {
                  libro = libro + "%20" + mensajeArreglo[i];
                }
              }
              libro = libro.trim();
              response = await respuestaLibroDisponible(
                remoteJid,
                tipo,
                options,
                libro
              );
              break;
            case "prestamos":
              const cedula = mensaje.trim().split(" ")[1];
              response = await respuestaPrestamosActivos(
                remoteJid,
                tipo,
                options,
                cedula
              );
              break;
            default:
              contenido =
                "MENU:\n1: Disponibilidad de un libro\n2: Consultar prestamos activos\n3: Preguntas frecuentes\nEscribe el número de la opción a seleccionar";
              response = await client.sendMessage(remoteJid, contenido, tipo);
          }
      }
    } // see updates (can be archived, pinned etc.)
  });
}
async function respuestaOpcion1(remoteJid, tipo, options) {
  contenido =
    "Para consultar la disponibilidad de un libro escriba: \n'libro nombre_del_libro'\nEjemplo:\nlibro la odisea";
  response = await client.sendMessage(remoteJid, contenido, tipo, options);
  return response;
}

async function respuestaOpcion2(remoteJid, tipo, options) {
  contenido =
    "Para consultar prestamos activos escriba: \n'prestamos numero_de_cedula'\nEjemplo:\nprestamos xxxxxxxxxx";
  response = await client.sendMessage(remoteJid, contenido, tipo, options);
  return response;
}
async function respuestaOpcion3(remoteJid, tipo, options) {
  const url = `http://localhost:3000/v1/api/preguntafrec/consultarpreguntasfrec`;
  got
    .get(url)
    .then(async (rsp) => {
      console.log(rsp.body);
      contenido = "";
      JSON.parse(rsp.body).forEach((item) => {
        contenido = contenido + item.pregunta + "\n" + item.respuesta + "\n";
      });
      response = await client.sendMessage(remoteJid, contenido, tipo, options);
      return response;
    })
    .catch(async (e) => {
      contenido = JSON.parse(e.body).message;
      response = await client.sendMessage(remoteJid, contenido, tipo, options);
      return response;
    });
}

async function respuestaLibroDisponible(remoteJid, tipo, options, libro) {
  const url = `http://localhost:3000/v1/api/libro/buscarlibro/${libro}`;
  got
    .get(url)
    .then(async (rsp) => {
      console.log("respuesta");
      console.log(rsp.body);
      const datosLibro = JSON.parse(rsp.body);
      const urlPortada = datosLibro.enlacePortada;
      const disponibilidad =
        datosLibro.cantidad > 0 ? "DISPONIBLE" : "NO DISPONIBLE";
      let categorias = "";
      datosLibro.categoria.forEach((categoria) => {
        categorias = categorias + "\n-" + categoria;
      });
      contenido = `Título: ${datosLibro.titulo}\nCategorías: ${categorias}\nAutor: ${datosLibro.autor}\nDisponibilidad: ${disponibilidad}`;
      response = await client.sendMessage(
        remoteJid,
        { url: urlPortada },
        MessageType.image,
        { mimetype: Mimetype.jpeg, caption: contenido }
      );
      return response;
    })
    .catch(async (e) => {
      contenido = JSON.parse(e.body).message;
      response = await client.sendMessage(remoteJid, contenido, tipo, options);
      return response;
    });
}

async function respuestaPrestamosActivos(remoteJid, tipo, options, cedula) {
  if (!validarCedula(cedula)) {
    contenido = "El número de cédula no es válido";
    response = await client.sendMessage(remoteJid, contenido, tipo, options);
    return response;
  }
  const url = `http://localhost:3000/v1/api/prestamo/prestamosActivos/${cedula}`;
  got
    .get(url)
    .then(async (rsp) => {
      const prestamos = JSON.parse(rsp.body);
      if (prestamos.length > 0) {
        contenido = "PRESTAMOS\n";
        prestamos.forEach((prestamo, i) => {
          contenido =
            contenido +
            `Prestamo #${i + 1}\nFecha de devolución: ${
              prestamo.fecha_devolucion
            }\nLibros:\n`;
          prestamo.libros.forEach((libro) => {
            contenido = contenido + `-${libro.titulo}\n`;
          });
        });
      } else {
        contenido = "";
      }
      response = await client.sendMessage(remoteJid, contenido, tipo, options);
      return response;
    })
    .catch(async (e) => {
      contenido = JSON.parse(e.body).message;
      response = await client.sendMessage(remoteJid, contenido, tipo, options);
      return response;
    });
}

module.exports = { conectarCliente };
