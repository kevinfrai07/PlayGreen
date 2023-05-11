import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'



export default function FormularioSesion({setEmail,setPassword,handleRegister,handleLogin,handleGoogle}) {
    
  const [form, setform] = useState("Login");
  const changeForm = (e:any) => {
        e.preventDefault();
        if(form==="Login"){
            setform("Register")
        }else{
            setform("Login")
        }
      };
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
