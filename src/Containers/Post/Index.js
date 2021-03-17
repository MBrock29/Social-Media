import React, {useState, useContext} from 'react'
import Comment from '../../Components/Comment/Index'
import { UserContext } from '../../Contexts/User'
import "./Style.css"

export default function Post({profileURL, username, id, photoURL, caption, comments}) {
    

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                  <img src={profileURL} className="post__profilePic"/>
                  <p>{username}</p>
                  <p style={{ marginLeft: "8px"}} />
                </div>
                <button className="post__delete">Delete</button>
            </div>
            <div className="post__center">
                <img className="post__photoURL" src={photoURL} />
            </div>
            <div>
            <p>
                <span style={{ fontWeight: "500", marginRight: "8px"}}>{username}</span>
                {caption}
                </p>
            </div>
           
            {comments ? (comments.map((comment) => (
              <Comment username={comment.username} caption={comment.comment} /> )))
             : <div></div> 
            }
        </div>
    )
}
