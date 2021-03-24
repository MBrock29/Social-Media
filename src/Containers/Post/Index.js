import React, {useState, useContext} from 'react'
import CommentInput from '../../Components/Comment-input/Index'
import Comment from '../../Components/Comment/Index'
import { UserContext } from '../../Contexts/User'
import { db, storage } from '../../Firebase'
import "./Style.css"

export default function Post({profileURL, username, id, photoURL, caption, comments, myname}) {
    const [user, setUser] = useContext(UserContext).user
    const deletePost = () => {
      
      var imageRef = storage.refFromURL(photoURL)
    
      imageRef.delete().then(function(){
          console.log("Delete successful")
      
      }).catch(function(error){
          console.log(`Error ${error}`)
      })

      db.collection("posts").doc(id).delete()
      .then(function () {
        console.log("Delete successful")
      
    }).catch(function(error){
        console.log(`Error ${error}`)
      })
    }
    

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                  <img src={profileURL} className="post__profilePic"/>
                  <p>{myname ? myname : username}</p>
                  {console.log(myname)}
                  <p style={{ marginLeft: "8px"}} />
                </div>
                {user && user.email === username && (<button onClick={deletePost} className="post__delete">Delete</button>)}
           
            </div>
            <div className="post__center">
                <img className="post__photoURL" src={photoURL} />
            </div>
            <div>
            <p>
                <span style={{ fontWeight: "500", marginRight: "8px"}}>{myname ? myname : username}</span>
                {caption}
                </p>
            </div>

           
           
            {comments ? (comments.map((comment) => (
              <Comment username={comment.myname ? comment.myname : comment.username} caption={comment.comment} /> )))
             : <div></div> 
            }
             {user ? <CommentInput comments={comments} id={id} /> : <></>}
        </div>
    )
}
