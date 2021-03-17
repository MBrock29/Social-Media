import React, {useState, useContext} from 'react'
import SignInBtn from '../../Components/Sign-In/Index'
import { UserContext } from '../../Contexts/User'
import "./Style.css"

export default function Navbar() {
    const [user, setUser] = useContext(UserContext).user
    return (
        <div className="Navbar">
            <h3>React Social Media</h3>
            {console.log(user)}

            {user ? <img src={user.photoURL} /> : <SignInBtn />}
        </div>
    )
}
