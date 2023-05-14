import { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import {useNavigate} from "react-router-dom";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { styles } from '../styles/styles';

export default function FormularioSesion() {
  const {AppDiv, Title, BtnGoogle} = styles
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setform] = useState("Login");
  const provider = new GoogleAuthProvider()
  const showToastMessage = (type:boolean,text:string) => {
    if(type){
        toast.success(text, {
            position: toast.POSITION.TOP_CENTER
        });
    }else{
        toast.error(text, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    
};
  
    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (email && password) {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                showToastMessage(true,"Usuario Creado")
                setform("Login")
            })
            .catch((error) => {
                const errorMessage = error.message;
                showToastMessage(false,errorMessage)
            });
        }
      };

      
    const handleLogin = (e: any) => {
        e.preventDefault();
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                showToastMessage(true,"Login Correcto")
                navigate("/home")
            })
            .catch((error) => {
                const errorMessage = error.message;
                showToastMessage(false,errorMessage)
            });
        }
      };
    const handleGoogle = (e: any) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((resp) => {
            GoogleAuthProvider.credentialFromResult(resp);
                showToastMessage(true,"Login Correcto")
                navigate("/home");
        }).catch((error) => {
            const errorMessage = error.message;
            showToastMessage(false,errorMessage)
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
            navigate("/home");
        } else {
            navigate("/");
        }
        });
    }, )


    return (
        <AppDiv>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                        <Title className='fw-bold'>Welcome</Title>
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
                                <BtnGoogle className='mx-1' onClick={(e) => handleGoogle(e)}><FaGoogle/></BtnGoogle>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </AppDiv>
    )
}
