import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import axios from 'axios'
import { motion } from 'framer-motion';



const Register = () => {

    const [input, setInput] = useState({
        name: "",
        password: ""
    })

    const [created, setCreated] = useState(false)

    const handleInput = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('users/', input)
            .then(res => console.log(res.data))
            .then(setCreated(true))

        setInput((prevState) => ({ ...prevState, name: '', password: '' }))
    }
    const paperStyle = { padding: '30px 20px', width: 300, margin: "0px auto", height: 300 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 35 }
    const background = { width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const buttons = { position: 'relative', top: '35px', left: '10px', margin: '10px 10px' }
    const success = { color: 'green', position: 'relative', top: '20px', fontSize: '15px', textAlign: 'center', display: created ? 'initial' : 'none' }


    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ delay: 0, duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Grid style={background}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}> Registro</h2>
                        <Typography variant='caption' gutterBottom>Por favor, llena estos campos para crear tu cuenta!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name" value={input.name} name='name' onChange={handleInput} />
                        {/*                     <TextField fullWidth label='Email' placeholder="Enter your email" /> */}
                        <FormControl component="fieldset" style={marginTop}>
                        </FormControl>
                        <TextField fullWidth label='Password' placeholder="Enter your password" type='password' value={input.password} name='password' onChange={handleInput} />
                        {/*                     <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password'/> */}
                        <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography style={success} variant='caption' gutterBottom>Cuenta creada correctamente !</Typography>
                        </Grid>
                        <Button type='submit' variant='contained' color='primary' style={buttons} onClick={handleSubmit}>Registrarse</Button>
                        <Button variant="outlined" href="/login" style={buttons}>Login</Button>

                    </form>
                </Paper>
            </Grid>
        </motion.div>
    )
}

export default Register