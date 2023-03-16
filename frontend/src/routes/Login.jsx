import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogUser } from '../redux/actions/actions';
import axios from 'axios';

const Login = () => {

    const [input, setInput] = useState({
        username: '',
        password: ''
    })
    const dispatch = useDispatch()
    const loggeduser = useSelector(state => state.user)
    

    useEffect(()=>{
    if(Object.keys(loggeduser).length > 0){
        window.location.href = '/'
    }
    },[loggeduser])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('/users/login', input)
        .then((res) => res.data)
        .then((rta) => dispatch(LogUser(rta)))
        .then(setInput({
            username: '',
            password: ''
        }))
    }

    const paperStyle = { padding: 20, height: '350px', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '20px 0px' }
    const background = { width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ delay: 0, duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Grid style={background}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Iniciar Sesion</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required value={input.username} name='username' onChange={handleChange} />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={input.password} name='password' onChange={handleChange} />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                    <Grid style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
                    </Grid>
                </Paper>
            </Grid>
        </motion.div>
    )
}

export default Login