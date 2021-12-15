const app = require("../app");
const { conectarCliente } = require("./clientWs");
const port = 8080;
app.set("port", port);

app.listen(port, () => {
  console.log(`Iniciando Servidor CHATBOT en el puerto ${port}`);
  conectarCliente();
});
