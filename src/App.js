import * as React from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Home } from './Home';
import NoteContextProvider from "./Contexts/NoteDataContext"
import { AuthContext } from './Contexts/AuthContext';


const App = () => {
  const {user, setUser} = React.useContext(AuthContext)
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        user ? setUser(true) : setUser(false)
    })
  },[])
  
  return (
    <NoteContextProvider>
      <header className="app h-[100vh] text-white">
        <div className="m-auto w-[85%]">
          <Home />
        </div>
      </header>
    </NoteContextProvider>
  );
}

export default App;
