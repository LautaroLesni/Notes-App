const { Router } = require('express');
const { Category, Note, User } = require('../../db.js');
const { Op } = require('sequelize')

const router = Router();

router.post('/', async function(req, res){
    const { name } = req.body
    if (!name){
        res.status(400).send("Se requiere un nombre de Categoría")
    }
    else{
        const category = await Category.create({name: name})
        res.status(200).send("Categoría creada correctamente")
    }
})

module.exports = router;