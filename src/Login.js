import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './Contexts/AuthContext';


export const Login = () => {
    const {user, setUser} = React.useContext(AuthContext)
    const navigate = useNavigate()
    const auth = getAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
            .then(() => {
                setUser(true)
                navigate('/')
                
            })
            .catch((err) => {
                setError(err.message)
            });
    }

    return (
        <header>
             
                <div className="m-auto w-[80%] text-white flex flex-col justify-center items-center align center h-[90vh]">

                    <div className="text-center text-2xl font-bold tracking-wide ">LOG<span className='text-yellow-800'>IN</span></div>

                    <form onSubmit={handleSubmit} className="text-black space-y-2">
                        <p className=" text-yellow-800 py-1">{error}</p>
                        <input type="email"
                            placeholder='Email'
                            className='p-3 rounded  outline-none w-[100%]'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 rounded outline-none  w-[100%]'
                        />
                        <p className="text-white py-2">Create a new account ? <Link to="/signup" className='text-yellow-800'>Sig<span className=""></span>nup</Link></p>

                        <button type='submit' className='bg-yellow-800 font-bold text-white hover:bg-yellow-700 px-3 py-3 rounded-xl w-[40%]'>Login</button>
                    </form>
                </div>

        </header>
    )
}
