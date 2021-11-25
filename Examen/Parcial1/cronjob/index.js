const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

//que se ejecute como un cronjob


cron.schedule("*/2 * * * *",
    async() => {
        //conectarnos a la pAgina web que vamos a hacer web scrapping
        //Obtenemos todo el HTML
        const html = await axios.get("http://localhost:3000/gasolinera");

        const $ = cheerio.load(html.data);

        const gasolinera = $(".data");
        let arregloGasolinera = [];
        //filtrar datos de la gasolinera
        gasolinera.each((index, element) => {
            //almacenar la informaciOn
            const Gasolinera = {
                placa: $(element).children('.Placa').text(),
                tipo: $(element).children('.Tipos').text(),
                galones: $(element).children('.Galones').text(),
                costo: $(element).children('.Costo').text(),
                total: $(element).children('.Total').text(),
                hora: $(element).children('.Hora').text(),
                tipodenovedad: 'ninguna',
                
            }
            arregloGasolinera = [...arregloGasolinera, Gasolinera];
        })
        arregloGasolinera.forEach(Gasolinera => {
            axios.post('http://localhost:3001/v1/api/gasolinera/nuevagasolinera',Gasolinera).then(res => {
                console.log(res.data.message);
            }).catch(err => {console.log(err)})
        })
    });