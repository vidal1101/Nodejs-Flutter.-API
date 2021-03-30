
/*
arranca la api, 
y llama a 2 modulos requeridos, 
*/
const app = require('./app');
const {connect} = require('./database');


async function main(){
    //data base connect
    await connect();
    // express aplication
    await app.listen(4000);
    console.log("server on port 4000");
}


main();