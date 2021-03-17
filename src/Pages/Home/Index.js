import React from 'react'
import CreatePost from '../../Containers/Create-Post/Index'
import Navbar from '../../Containers/Navbar/Index'
import "./Style.css"
import Feed from '../../Containers/Feed/Index'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <CreatePost />
            <Feed />
        </div>
    )
}
