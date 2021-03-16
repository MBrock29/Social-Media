import React, {useState, useContext} from 'react'
import SignInBtn from '../../Components/Sign-In/Index'
import { UserContext } from '../../Contexts/User'
import "./Style.css"

export default function Navbar() {
    const [user, setUser] = useContext(UserContext).user
    return (
        <div className="Navbar">
            <h3>React Social Media</h3>
            <h3>{user}</h3>

            {user ? <p>Logged in!</p> : <SignInBtn />}
        </div>
    )
}
