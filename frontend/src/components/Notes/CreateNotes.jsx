import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postNote } from "../../redux/actions/actions";


const CreateNotes = () =>{

    const loggeduser = useSelector(state => state.user)
    const dispatch = useDispatch()


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #ffffff',
        boxShadow: 24,
        p: 4,
      };
    const [input, setInput] = useState({
        name:'',
        description:'',
        id: loggeduser.ID
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(input)
        dispatch(postNote(input))
        setInput({...input, name: '', description: ''})
        setOpen(false)
    }


    return (
        <div>
        <Button style={{border:'1px solid white', color:'white'}} onClick={handleOpen}>Crear Nota</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Crea tu nota!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Para crear tu nota debes especificar el nombre de la nota y su descripción
            </Typography>
            <TextField style={{marginTop:20}} id="outlined-basic" label="Etiqueta (Nombre)" variant="outlined" value={input.name} name='name' onChange={handleChange}/>
            <TextField style={{marginTop:10, width:'100%'}} id="filled-multiline-static" label="Descripción" multiline rows={7} variant="filled" value={input.description} name='description' onChange={handleChange}/>
            <Button style={{marginTop:10}} type='submit' variant='contained' color='primary' onClick={handleSubmit}>Crear Nota</Button>
          </Box>
        </Modal>
      </div>
    )
}

export default CreateNotes