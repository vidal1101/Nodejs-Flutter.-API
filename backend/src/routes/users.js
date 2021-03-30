/*
a traves de este medio se llama se comunica con la base de datos y las 
rutas para crear y mostrar los datos a consumir en la vista de flutter
*/

const {Router} = require('express');
const faker = require('faker');
const User = require('../models/Users');

const router = Router();

//get users on database , muestra datos de la base de datos en json
router.get('/api/users' ,async (req, res)=>{
   // res.json('user lists');
    const users=  await User.find(); 
    res.json({users})
});

//crea usuarios del faker, crea y almacena los datos
router.get('/api/users/create', async (req,res)=>{

    for (let i = 0; i < 5; i++) {
       await  User.create({
            firstName:  faker.name.firstName(),
            lastName:   faker.name.lastName(),
            avatar:     faker.image.avatar(),
        });
    }
    res.json({message:'5 user create'});
});

//el modulo a exportar  o ser leido desde otros archivos
module.exports = router;
