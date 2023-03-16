import React from 'react'
import s from './HomeIndex.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HomeIndex = () => {


    return (
        <div className={s.OutterDIV}>
            <div className={s.contentDIV}>
                <motion.h1
                    initial={{ opacity: 0, y: -300 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>Bienvenido a Notes App</motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>Te invito a que te registres para disfrutar de la aplicación, te aseguro que no te tomará mas de un minuto</motion.h2>
                <motion.div className={s.buttons}
                    initial={{ opacity: 0, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                    <Link to={'/login'} className={s.loginbutton}>Login</Link>
                    <Link to={'/register'} className={s.registerbutton}>Register</Link>
                </motion.div>
            </div>
        </div>)
}

export default HomeIndex