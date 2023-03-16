const { Router } = require('express');
const { Category, Note, User } = require('../../db.js');
const { Op } = require('sequelize')

const router = Router();

router.get('/', async function (req, res) {

    const notes = await Note.findAll({ include: [{ model: Category }, { model: User }] })
    res.status(200).send(notes)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let notes = await Note.findAll({
            include: [
                { model: User, where: { ID: id } },
                { model: Category }
            ]
        })
        res.status(200).send(notes)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async function (req, res) {
    const { name, description, id } = req.body
    if (!name || !description || !id) {
        res.status(400).send('Debes pasar un nombre, descripcion e ID de usuario')
    }
    else {
        const note = await Note.create({ name: name, description: description })
        const usuario = await User.findByPk(id)
       await note.addUser(usuario)

        let updatednotes = await Note.findAll({
            include: [
                { model: User, where: { ID: id } },
                { model: Category }
            ]
        })

        res.status(200).send(updatednotes)

    }
})

router.put('/', async function (req, res) {
    const { noteid, name, description, archived, iduser } = req.body
    try {
        if (!noteid) {
            res.status(400).send('Se necesita un id de nota para proseguir')
        }
        const modifiedNote = await Note.findByPk(noteid)
        if (Object.keys(modifiedNote) < 1) {
            res.send('No se encontró la nota')
        }
        if (name && description && !archived) {
            modifiedNote.name = name
            modifiedNote.description = description
            await modifiedNote.save();

            let updatednotes = await Note.findAll({
                include: [
                    { model: User, where: { ID: iduser } },
                    { model: Category }
                ]
            })
            res.send(updatednotes)

        }
        if (archived && !name && !description) {
            modifiedNote.archived = archived
            await modifiedNote.save()
            let updatednotes = await Note.findAll({
                include: [
                    { model: User, where: { ID: iduser } },
                    { model: Category }
                ]
            })
            res.send(updatednotes)

        }
    }
    catch (error) {
        res.send(error)
    }

})

router.delete('/:noteid/:userid', async function (req, res) {
    try {
        const { noteid, userid } = req.params
        const deletednote = await Note.findByPk(noteid)
        if (Object.keys(deletednote) < 1) {
            res.status(400).send('No se encontró una nota con ese ID')
        }
        await deletednote.destroy();

        let updatednotes = await Note.findAll({
            include: [
                { model: User, where: { ID: userid } },
                { model: Category }
            ]
        })
        res.send(updatednotes)
    }
    catch (error) {
        res.send(error)
    }
})
module.exports = router;