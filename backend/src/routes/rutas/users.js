const { Router } = require('express');
const { Category, Note, User } = require('../../db.js');
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')

const router = Router();

router.get('/', async function (req, res) {

    const users = await User.findAll({ include: [{ model: Note }] })
    res.status(200).send(users)
})

router.post('/', async function (req, res) {
    const { name, password } = req.body
    if (!name || !password) {
        res.status(400).send('Debes pasar un nombre de usuario y contraseña')
    }
    else {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({ name: name, password: hashedPassword })
        console.log(hashedPassword)
        console.log(salt)
        res.status(200).send(user)
    }
})


router.post('/login', async function (req, res) {
    const { username, password } = req.body

    try {
        if (!username || !password) {
            return res.status(400).send('Se necesita usuario y contraseña para logearse')
        }

        const usuario = await User.findAll({ where: { name: username } });
        
        if (usuario.length === 0) {
            return res.status(400).send('No se encontraron usuarios')
        }

        if (await bcrypt.compare(password, usuario[0].password)) {
            res.status(200).send(usuario[0])
        }
        else { res.status(400).send('Contraseña o usuarios incorrectos') }
    }
    catch (error) {
        res.status(500).send(error)
    }


})

module.exports = router;