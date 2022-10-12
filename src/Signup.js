import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'



export const Signup = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    // const provider = new GoogleAuthProvider()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, username, password)
            .then((res) => {

            })
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                setError(err.message)
            });
    }

    return (
        <header>
            <div className="m-auto w-[80%] text-white flex flex-col justify-center items-center align center h-[90vh]">

                <div className="text-center uppercase text-2xl font-bold tracking-wide ">Sign<span className='text-yellow-800'>Up</span></div>

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
                    <p className="text-white py-2">Already have an account ? <Link to="/login" className='text-yellow-800'>Log<span className=""></span>in</Link></p>

                    <button type='submit' className='bg-yellow-800 font-bold text-white  hover:bg-yellow-700 px-3 py-3 rounded-xl w-[40%]'>Signup</button>
                </form>
            </div>
        </header>
    )
}
