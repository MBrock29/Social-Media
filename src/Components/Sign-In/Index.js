 import React, {useContext} from 'react'
import { UserContext } from '../../Contexts/User'
import { signInWithGoogle } from '../../Services/Auth'
 import "./Style.css"
 
 export default function SignInBtn() {
    const [ user, setUser ] = useContext(UserContext).user

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle()
        if(userBySignIn) setUser(userBySignIn)
    }
     return (
         <div className="signInBtn" onClick={signInBtnClick}>
             {console.log(user)}
             <p>Sign in with Google</p>
         </div>
     )
}
 