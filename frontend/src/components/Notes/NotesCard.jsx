import React from "react";
import s from './NotesCard.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Grid } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from "../../redux/actions/actions";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { editNote } from "../../redux/actions/actions";

const NotesCard = ({ name, description, date, hour, id }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleDelete = () => {
        dispatch(deleteNote(id, user.ID))
    }
    const [edit, setEdit] = useState(false);
    const [archive, setArchive] = useState(false);
    const [input, setInput] = useState({
        noteid: id, name: name, description: description, iduser: user.ID
    })
    const handleEditOpen = () => setEdit(true);
    const handleEditClose = () => setEdit(false);
    const handleArchiveOpen = () => setArchive(true);
    const handleArchiveClose = () => setArchive(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        dispatch(editNote(input))
        setInput({ ...input, name: '', description: '' })
        setEdit(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #ffffff',
        boxShadow: 24,
        p: 3,
    };

    return (
        <div className={s.cardDIV}>
            <h2>{name}</h2>
            <div className={s.createdAt}>
                <h4>{date}</h4>
                <h4>{hour}</h4>
            </div>
            <div className={s.description}>
                <p>{description}</p>
            </div>
            <div className={s.buttons}>
                <DeleteForeverIcon onClick={handleArchiveOpen} />
                <ArchiveIcon onClick={handleArchiveOpen} />
                <EditIcon onClick={handleEditOpen} />
            </div>

            <Modal
                open={edit}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edita tu nota!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Para poder editar tu nota debes indicar nombre y descripción
                    </Typography>
                    <TextField style={{ marginTop: 20 }} id="outlined-basic" label="Etiqueta (Nombre)" variant="outlined" name='name' value={input.name} onChange={handleChange} />
                    <TextField style={{ marginTop: 10, width: '100%' }} id="filled-multiline-static" label="Descripción" multiline rows={7} variant="filled" name='description' value={input.description} onChange={handleChange} />
                    <Button style={{ marginTop: 10 }} type='submit' variant='contained' color='primary' onClick={handleSubmit}>Editar Nota</Button>
                </Box>
            </Modal>

            <Modal
                open={archive}
                onClose={handleArchiveClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Borrar nota
                    </Typography>
                    <Typography id="modal-modal-description" style={{width:'500px'}}sx={{ mt: 2 }}>
                        ¿Estás seguro que quieres eliminar permanentemente esta nota?
                    </Typography>
                    <Grid style={{position:'relative', left:'50%', display:'flex', justifyContent:'space-around', width:'50%'}}>
                    <Button style={{ marginTop:'20px'}} variant="contained" onClick={handleArchiveClose}>Cancelar</Button>
                    <Button style={{ marginTop:'20px'}} variant="contained" onClick={handleDelete}>Eliminar</Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default NotesCard