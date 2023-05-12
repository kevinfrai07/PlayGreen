import React, { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import {useNavigate} from "react-router-dom";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export default function FormularioSesion() {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setform] = useState("Login");
  const provider = new GoogleAuthProvider()
  
    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (email && password) {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setform("Login")
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
        }
      };

      
    const handleLogin = (e: any) => {
        e.preventDefault();
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        //   setIsAuth(auth.user['accessToken'])
        }
      };
    const handleGoogle = (e: any) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            navigate("/home");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
      };

    const changeForm = (e:any) => {
        e.preventDefault();
        if(form==="Login"){
            setform("Register")
        }else{
            setform("Login")
        }
      };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            navigate("/home");
            console.log("uid", uid)
        } else {
            console.log("user is logged out")
        }
        });
         
    }, [])


    return (
        <div className="App">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                        <h1 className='fw-bold title'>Welcome</h1>
                        <a onClick={(e) => changeForm(e)} className="button">
                            {form === "Login" ? "Sign Up":"Sing In"}
                        </a>
                        {form !== "Login" ?
                        <form onSubmit={(e)=>handleRegister(e)}>
                            <h3 className="">{form}</h3>
                            <div className="form-floating">
                                <input required type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                <label>Email</label>
                            </div>
                            <div className="form-floating my-2">
                                <input required type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label>Password</label>
                            </div>
                            <div className="form-floating">
                                <button onClick={(e) => handleRegister(e)} className="btn btn-primary btn-lg mx-1">
                                    Sing Up
                                </button>
                            </div>
                        </form>
                        :
                        <form onSubmit={(e)=>handleLogin(e)}>
                            <h3 className="">{form}</h3>
                            <div className="form-floating">
                                <input required type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                <label>Email</label>
                            </div>
                            <div className="form-floating my-2">
                                <input required type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label>Password</label>
                            </div>
                            <div className="form-floating">
                                <button onClick={(e) => handleLogin(e)} className="btn btn-primary btn-lg mx-1">
                                    Login
                                </button>
                                Or
                                <button className='btnGoogle mx-1' onClick={(e) => handleGoogle(e)}><FaGoogle/></button>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
