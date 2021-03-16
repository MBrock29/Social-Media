import React from 'react'
import "./Style.css"
import SignInBtn from '../../Components/Sign-In/Index'

export default function CreatePost() {
    return (
        <div className="createPost">
            <SignInBtn />
            <p style={{ marginLeft: "12px "}}>to post and comment</p>
        </div>
    )
}
