import React from 'react'
import { FaGoogle } from 'react-icons/fa'



export default function FormularioSesion({setEmail,setPassword,handleLogin,handleGoogle}) {
    return (
        <div className="App">
            <div className="container text-center">
                <h2>Welcome</h2>
            </div>
            {/* <form className="form">
        <h3 className="title">Register</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleRegister(e)} className="button">
          submit
        </button>
      </form> */}

            <form>
                <h3 className="title">Login</h3>
                <div className="form-floating">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                    <label>User</label>
                </div>
                <div className="form-floating">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Password</label>
                </div>
                <div className="form-floating">
                    <button onClick={(e) => handleLogin(e)} className="button btn btn-primary">
                        Login
                    </button>
                </div>

                <button onClick={(e) => handleGoogle(e)}><FaGoogle/></button>



            </form>

        </div>
    )
}
