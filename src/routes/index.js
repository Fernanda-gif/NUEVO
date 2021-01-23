const { Router } = require('express');

const router = Router();

const faker = require('faker');

const Comentario = require('../models/Comentario');

const Targeta = require('../models/Targeta');


//Ruta que  crear 100 registros de targetas
router.get('/create', async (req, res) => {
    // console.log(faker.image.imageUrl());
    // console.log(faker.name.title());
    // console.log(faker.lorem.paragraph());
    // console.log(faker.random.number());
    // res.json('data');
    for(let i = 0; i < 100; i++) {
        // faker.seed(100);
        await Targeta.create({
            title: faker.name.title(),
            power: faker.random.number(),
            defending: faker.random.number(),
            description: faker.lorem.paragraph(),
            imageURL: faker.image.imageUrl(),
        });
    }
    res.json({message: '100 Targetas creadas'});
});


//Ruta que muestra las targetas
router.get('/targetas', async (req, res) => {
    const targetas = await Targeta.find();
    res.json({targetas});
});

//Ruta que trae una tageta en especifica
router.get('/targetas/:id', async (req, res) => {
    const targeta = await Targeta.findById(req.params.id);
    if(!targeta) {
        res.json({mensaje : 'Esa Targeta no existe'});
        return next();
    }
    // Mostrar la targeta
    res.json(targeta);
});


//Ruta que trae los comentarios de una targeta
router.get('/comentarios/:idcard', async (req, res) => {
    const comentarios = await Comentario.find({idcard: req.params.idcard});
    res.json({comentarios});
});


//Ruta que  agrega  comentarios por cada targeta
router.get('/coment/create', async (req, res) => {
    const targetas = await Targeta.find();

    res.json({targetas});
    targetas.forEach(targeta => {
      
        for(let i = 0; i < 2; i++) {
            // faker.seed(100);
             Comentario.create({
                name: faker.name.title(),
                comment:faker.lorem.sentence(),
                idcard: targeta.id,
            })
        }
    });
 
    
    res.json({message: '100 comentarios'});
});



module.exports = router;