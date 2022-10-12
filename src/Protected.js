import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { AuthContext } from './Contexts/AuthContext';


const Protexted = () => {
    const {user, setUser} = React.useContext(AuthContext)
    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default Protexted