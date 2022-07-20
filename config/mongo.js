const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(error, res)=>{
        if(!error){
            console.log("***** Conexion Correcta *****")
        }else {
            console.log("***** Error de Conexion *****");
        }
    });
}


module.exports = dbConnect