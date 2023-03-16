const { Router } = require('express');
const usersMiddleware = require('./rutas/users')
const notesMiddleware = require('./rutas/notes')
const categoriesMiddleware = require('./rutas/categories')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/users', usersMiddleware)
router.use('/notes', notesMiddleware)
router.use('/categories', categoriesMiddleware)

router.get('/',function(req,res){
    res.send("Prueba Tecnica")
})

module.exports = router;
