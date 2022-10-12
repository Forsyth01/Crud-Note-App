
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { getAuth } from 'firebase/auth'
import { collection, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../src/firebase'
import { NoteDataContext } from './Contexts/NoteDataContext'



const Notes = () => {
    const { isLoading, notes, handleDelete, auth, colRef, q, setIsloading, setNotes } = useContext(NoteDataContext)

    useEffect(() =>
        onSnapshot(q, (snapshot) => {
            setNotes(snapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((note) => note.user == auth.currentUser.uid)
            );
            setIsloading(false)
        })
        , [])

    return (
        <div className="addnote">

                {isLoading && <div className="my-7 text-2xl font-extrabold tracking-[3px]">Fetching data...</div>}

                {notes.length == "" && !isLoading && <div className="text-white text-3xl font-bold my-7 ">Click the icon below to add a new note</div>}

            <div className="grid cursor-pointer break-words whitespace-pre-wrap overflow-hidden md:grid-cols-4 grid-cols-2  gap-5 m-auto my-10 text-white">

                {notes.map((note) => {
                    return (
                        <div
                            className="">
                            {<div className="bg-gray-900 p-3 h-fit rounded-xl hover:scale-[101%] duration-700 w-[100%] shadow-md">
                                <Link to={`/notes/${note.id}`}>
                                    <h1 className="text-xl mb-4  font-bold">{note.title.substring(0, 20)}</h1>
                                    <p className="">{note.note.substring(0, 200)}</p>
                                </Link>
                                <div className="flex justify-between items-center">
                                    <div className="text-yellow-700">
                                        <i ></i>
                                    </div>
                                    <div className="text-yellow-70">
                                        <i onClick={() => handleDelete(note.id)}> <AiOutlineDelete className='text-2xl hover:text-yellow-600' /></i>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )
                })}

                <div className="fixed right-[7%] bottom-[10%]">
                    <Link to="/addnote" className=''> <AiOutlinePlus className=' bg-yellow-700 text-gray-100 p-2 hover:bg-yellow-600 rounded-full text-5xl' /></Link>
                </div>

            </div>
        </div>
    );
}

export default Notes;