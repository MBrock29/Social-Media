import React, {useContext, useState} from 'react'
import { UserContext } from '../../Contexts/User'
import { db } from '../../Firebase'
import "./Style.css"

export default function CommentInput({comments, id}) {
    const [user, setUser] = useContext(UserContext).user
    const [comment, setComment] = useState("")
    const commentArray = useState(comments ? comments: [])
    
    const addComment = () => {
        if(comment !== ""){
        
        commentArray.push( {
        comment: comment,
        username: user.email,
        myname: user.displayName,
        })
        db.collection("posts")
        .doc(id)
        .update({
            comments: commentArray,
        }).then(function() {
            setComment("")
            console.log("comment added")
        }).catch(function(error){
            console.log(`Error ${error}`)
        })
    }
    }   
     return (
        <div className="commentInput">
            <textarea className="commentInput__textarea" 
            rows="1"
            placeholder="Write a comment..."
            onChange={(e) => setComment(e.target.value)}>
                
            </textarea>

            <button onClick={addComment} className="commentInput__btn">Post</button>
            
        </div>
    )
}
