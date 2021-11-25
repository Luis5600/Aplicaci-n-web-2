const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");

const PUERTO= 3000;
const gasolinera=  fs.readFileSync("./public/gasolinera.html");

const server = express();
server.use(cors()).use(express.json())

server.get('/gasolinera', (req, res) => {
    res.write(gasolinera);
    res.end();
})


const paginaDeError = path.join(__dirname , "./public/error.html");

server.use((req,res,next)=>{
    res.status(400).sendFile(paginaDeError);
})


server.listen(PUERTO, ()=>{
    console.log(`Servidor se encuentra funcionando en el puerto ${PUERTO}`);
});