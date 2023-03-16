import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "../../redux/actions/actions";

const NoteFilter = () => {
    const [filtro, setFiltro] = useState(true);
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(filterByType(filtro));
        setFiltro(!filtro)
    };
    return (
        <div>
            <h2 onClick={handleChange}>{filtro === true ? 'Ver Notas Archivadas' : 'Ver Notas Activas'}</h2>
        </div>
    )
}

export default NoteFilter