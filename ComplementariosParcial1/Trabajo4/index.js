const express = require('express');

const server = express();
const fs = require('fs')
const conexion_mongodb = require('./src/helpers/conexion_mongodb');
const home = fs.readFileSync('./public/index.html');
const about= fs.readFileSync('./public/about.html');


server.get('/',getHomePage)
server.get('/about',(req,res)=>{
 res.write(about)
})

server.get('/noticia',(req, res)=>{
    const collectionNoti = conexion_mongodb.getconexion_mongodb().db('practica3').collection('noticias');
    collectionNoti.find().toArray((err, datos) => {
        res.status(200).json({ noticias: datos });
    });
})
conexion_mongodb.conexion_mongodb().then(() => {
    server.listen(3001, ()=>{
        console.log(`Servidor corriendo en el puerto 3001`);
    })
})
function getHomePage(req,res)
{
 return res.write(home)
} 