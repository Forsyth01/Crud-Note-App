import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../src/firebase'
import EditNote from './EditNote'

export const NoteDetails = ({ editTitle }) => {

    const [noteDetails, setNoteDetails] = useState([])
    const [noteEdit, setNoteEdit] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    const docRef = doc(db, "Notes", id)
    onSnapshot(docRef, (doc) => {
        setNoteDetails(doc.data(), doc.id)
    })

    function handleDelete() {
        deleteDoc(docRef)
        navigate("/")
    }

    function handleEdit() {
        setNoteEdit(true)
    }

 function handleHistory(){
    navigate("/")
 }

    return (
        <div className="text-white">
            <div className="flex justify-end py-5 m-auto w-[80%]">
                <div className="">
                    {!noteEdit && <div className="space-x-3"> <button onClick={() => handleDelete(noteDetails)} type="submit" className="my-5 bg-yellow-700 hover:bg-yellow-600 py-2 px-4 hover:scale-[102%] rounded-xl">Delete</button>
                        <button onClick={handleHistory} type="submit" className="my-5 bg-yellow-700 hover:bg-yellow-600 py-2 px-4 hover:scale-[102%] rounded-xl">back</button></div>}
                </div>
            </div>

            <div onClick={() => handleEdit()} className="m-auto w-[80%] break-words whitespace-pre-wrap space-y-4">
                {noteEdit ? <EditNote noteDetails={noteDetails} docRef={docRef} setNoteEdit={setNoteEdit} /> :
                    <div>
                        <h1  className="text-3xl font-bold normal-case pb-3">{noteDetails.title}</h1>
                        <h1 className="text-xl">{noteDetails.note}</h1>
                    </div>}


            </div>
        </div>
    )
}
