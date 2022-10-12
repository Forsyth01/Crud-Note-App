import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'
import { collection, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export const NoteDataContext = createContext();

const NoteContextProvider = (props) => {
    
    const [isLoading, setIsloading] = useState(true)
    const [notes, setNotes] = useState([])
    const auth = getAuth();
    const colRef = collection(db, "Notes")
    const q = query(colRef, orderBy('createdAt', 'desc'))
    
    function handleDelete(id) {
        const docRef = doc(db, "Notes", id)
        deleteDoc(docRef)
    }

    return (
        <NoteDataContext.Provider value={{ isLoading, notes, handleDelete, auth, colRef, q, setIsloading, setNotes }}>
            {props.children}
        </NoteDataContext.Provider>
    );
};

export default NoteContextProvider;