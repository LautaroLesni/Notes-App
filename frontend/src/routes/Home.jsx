import React from "react";
import HomeIndex from "../components/Home/HomeIndex";
import NotesApp from "../components/Notes/NotesApp";
import { useSelector } from 'react-redux'

const Home = () => {
    const loggeduser = useSelector(state => state.user)

    return (

        <div>
            {Object.keys(loggeduser).length > 0 ?
                <NotesApp />
                :
                <HomeIndex />}
        </div>)
}

export default Home