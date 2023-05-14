import { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import {useNavigate} from "react-router-dom";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { styles } from '../styles/styles';

export default function FormularioSesion(props:any) {
  const {isDark} = props
  const {AppDiv, Title, BtnGoogle, InpustLogin, LblInput, PText} = styles
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
                setform("Login")
            })
            .catch((error) => {
                const errorMessage = error.message;
                showToastMessage(false,errorMessage)
            });
        }
      };

      
    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (email && password) {
            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/home")
            })
            .catch((error) => {
                const errorMessage = error.message;
                showToastMessage(false,errorMessage)
            });
        }
      };
    const handleGoogle = async (e: any) => {
        e.preventDefault();
        await signInWithPopup(auth, provider)
        .then((resp) => {
             GoogleAuthProvider.credentialFromResult(resp)
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
                        <Title isDark={isDark} className='fw-bold'>Welcome</Title>
                        <a onClick={(e) => changeForm(e)} className="button">
                            {form === "Login" ? "Sign Up":"Sing In"}
                        </a>
                        {form !== "Login" ?
                        <form onSubmit={(e)=>handleRegister(e)}>
                            <PText isDark={isDark}  className="fs-4">{form}</PText >
                            <div className="form-floating">
                                <InpustLogin isDark={isDark} required type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                <LblInput isDark={isDark}>Email</LblInput>
                            </div>
                            <div className="form-floating my-2">
                                <InpustLogin isDark={isDark} required type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <LblInput isDark={isDark}>Password</LblInput>
                            </div>
                            <div className="form-floating">
                                <button onClick={(e) => handleRegister(e)} className="btn btn-primary btn-lg mx-1">
                                    Sing Up
                                </button>
                            </div>
                        </form>
                        :
                        <form onSubmit={(e)=>handleLogin(e)}>
                            <PText isDark={isDark}  className="fs-4">{form}</PText >
                            <div className="form-floating">
                                <InpustLogin isDark={isDark} required type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                <LblInput isDark={isDark}>Email</LblInput>
                            </div>
                            <div className="form-floating my-2">
                                <InpustLogin isDark={isDark} required type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <LblInput isDark={isDark}>Password</LblInput>
                            </div>
                            <div className="form-floating">
                                <button onClick={(e) => handleLogin(e)} className="btn btn-primary btn-lg mx-1">
                                    Login
                                </button>
                                <PText className='my-2' isDark={isDark}>Or</PText>
                                <BtnGoogle isDark={isDark} className='mx-1' onClick={(e) => handleGoogle(e)}><FaGoogle/></BtnGoogle>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </AppDiv>
    )
}
