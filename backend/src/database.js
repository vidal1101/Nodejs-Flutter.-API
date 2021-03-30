/*
crea la instancia para conectarse a la base de datos y
*/
const mongoose = require('mongoose');

//metodo de coneccion a la base de datos
async function connect(){
    await mongoose.connect('mongodb://localhost/flutter-node',{
        useNewUrlParser:true
    });
    console.log('DB connect sucess');
}

//modulo de exportacion o objeto de la clase. 
module.exports ={connect};
