const platos=[
    "encebollado",
    "tigrillo",
    "bolon",
    "sanduche",
    "ceviche"
]
const otrosPlatos= [
    "Ärroz con pollo",
    "Tonga",
    "Guata con lengua"
]


const unionPlatos = [ ...platos, ...otrosPlatos]
console.log(unionPlatos)


//console.log(platos.includes("ceviche"))