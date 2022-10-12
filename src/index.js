import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Addnote from './Addnote';
import { NoteDetails } from './NoteDetails';
import Notes from './Notes';
import { Login } from './Login';
import { Signup } from './Signup';
import Protexted from './Protected';
import AuthContextProvider from "./Contexts/AuthContext"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ParallaxProvider>
      < AuthContextProvider>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Protexted />}>
              <Route path="/" element={<App />} />
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/addnote" element={<Addnote />}></Route>
            <Route path="/notes/:id" element={<NoteDetails />}></Route>
          </Routes>
        </React.StrictMode>
      </AuthContextProvider>
    </ParallaxProvider>
  </BrowserRouter>
);

