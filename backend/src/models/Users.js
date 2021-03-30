
/*
se crea un modelo de la base y el script para insertar datos en el json.
*/
const {Schema , model }= require('mongoose');

const usershema = new Schema({
    firstName   : String ,
    lastName    : String ,
    avatar      : String ,
});


//objeto user de userShema, que seria el modelo a llamar. 
module.exports = model('User' , usershema);


