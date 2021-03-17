import React, { useContext, useState } from 'react'
import "./Style.css"
import SignInBtn from '../../Components/Sign-In/Index'
import { UserContext } from '../../Contexts/User'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { db, storage } from "../../Firebase"
import makeid from "../../Functions"
import firebase from "firebase"


export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const handleUpload = () => {
        if(image) {
            var imageName = makeid(10)
            const uploadTask = storage.ref(`images/${imageName}.jpg`)
            .put(image);

            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            
            setProgress(progress)
            }, (error) => {
                console.log(error)
            }, () => {

                storage.ref("images").child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageURL) => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        photoURL: imageURL,
                        username: user.email.replace("@gmail.com",""),
                        profileURL: user.photoURL
                    })
                })
                setCaption("")
                setProgress(0)
                setImage(null)

                document.getElementById("image-preview").style.display = "none"
            })
        }
    }
    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])

            var selectedImageSrc = URL.createObjectURL(e.target.files[0])
        
            var imagePreview = document.getElementById("image-preview")
            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block"
        }
    }
    return (
        <div className="createPost">
            {user ? (
            <div className="createPost__loggedIn">
            <p className="createPost__header">Create Post</p> 
            <div className="createPost__loggedInCenter">
            <textarea 
             className="createPost__textarea"
             rows="3"
             placeholder="Enter text here..."
             value={caption}
             onChange={(e) => setCaption(e.target.value)}
            >
            </textarea>
            <div className="createPost__imagePreview">
                <img id="image-preview" alt="" />
            </div>
            </div>
            <div className="createPost__loggedInBottom">
            <div className="createPost__imageUpload">
               <label htmlFor="fileInput">
                   <AddAPhotoIcon style={{cursor:"pointer", fontSize:"20px"}} />
               </label> 
            <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
            </div>
            <button className="createPost__uploadBtn" onClick={() => handleUpload()} style={{color: caption ? "#000" : "lightgrey"}}>{`Upload ${progress != 0 ? progress : ""}`}</button>
            </div>
            </div>
            ):
            <div>
            <SignInBtn />
            <p style={{ marginLeft: "12px "}}>to post and comment</p></div>}
        </div>
    )
}
