import React from "react";
import s from './NotesCatalog.module.css'
import NotesCard from "./NotesCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { getNotes } from "../../redux/actions/actions";

const NotesCatalog = () =>{
    const dispatch = useDispatch()

    const {user, notes} = useSelector(state => state)
    useEffect(()=>{
        dispatch(getNotes(user.ID))
    },[dispatch, user.ID])

    return (
        <div className={s.outterDIV}>
                {notes?.map(note=> (
                    <NotesCard 
                    key={note.ID}
                    name={note.name}
                    description={note.description}
                    date={note.date}
                    hour={note.hour}
                    id={note.ID}
                    />
                ))}


        </div>
    )
}

export default NotesCatalog