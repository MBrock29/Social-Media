import React, {useEffect, useState} from 'react'
import { db } from '../../Firebase'
import Post from "../Post/Index"
import "./Style.css"

export default function Index() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => (
            {id: doc.id, post: doc.data()}
        )))
    })
    }, [])
    return (
        <div className="feed">
        
            {posts.map(({id, post}) => {
                return (
                <Post profileURL={post.profileURL}
                username={post.username}
                photoURL={post.photoURL}
                caption={post.caption}
                comments={post.comments}
                key={id}
                id={id}
                />
                )}
            )}
        </div>
    )
}
