import React from "react";
import s from './NotesApp.module.css'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import CreateNotes from "./CreateNotes";
import NotesCatalog from "./NotesCatalog";

const NotesApp = () => {
    const loggeduser = useSelector(state => state.user)

    return (
        <div className={s.outterDIV}>
            <div className={s.welcomeDIV}>
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>Bienvenido {loggeduser.name}</motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 0 }}
                    transition={{ delay: 1.3, duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>Puedes crear notas presionando en el botón "Crear Nota" para empezar</motion.h2>
            </div>
            <div className={s.toolwheel}>
                <CreateNotes />
            </div>
            <div className={s.notesCatalogDIV}>
                <NotesCatalog />
            </div>
            <div></div>
        </div>)
}

export default NotesApp