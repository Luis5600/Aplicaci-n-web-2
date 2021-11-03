if (process.env.NODE_ENV !== 'production')

{
    require("dotenv").congif();
}


module.exports={
    MONGO_URI: process.env.MONGO_URI
}