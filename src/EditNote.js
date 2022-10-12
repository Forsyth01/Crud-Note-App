import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { NoteDataContext } from './Contexts/NoteDataContext'
import { doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

const EditNote = ({ noteDetails, docRef, setNoteEdit }) => {

    const [editTitle, setEditTitle] = useState(noteDetails.title)
    const [editDetails, setEditDetails] = useState(noteDetails.note)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        updateDoc(docRef, {
            title: editTitle,
            note: editDetails
        })

            .then(() => {
                setNoteEdit(false)
            })

        if (editTitle || editDetails == ""){
            navigate("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-white ">

                <div className="flex justify-end">
                    <button type="submit" className=" bg-yellow-700 hover:bg-yellow-600 py-2 px-4  rounded-xl">Done</button>
                </div>
                <div className='flex flex-col  text-black py-10'>
                    <input
                        value={editTitle}
                        type="text"
                        className='bg-[#111111] text-white w-[100%]  whitespace-pre  outline-none text-3xl font-bold'
                        onChange={(e) => setEditTitle(e.target.value)}

                    />
                    <textarea
                        value={editDetails}
                        className="bg-[#111111] h-[50vh] resize-none text-white w-[100%] py-3 outline-none text-xl"
                        onChange={(e) => setEditDetails(e.target.value)}
                    />
                </div>

            </div>

            {/* <div className="text-white py-10">
                <div className="w-[90%] m-auto ">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="flex justify-end">
                            <button type="submit" className=" bg-yellow-700 hover:bg-yellow-600 py-2 px-4 hover:scale-[102%] rounded-xl">Submit</button>
                        </div>

                        <div className="py-5">
                            <input type="text"
                                value={title}
                                onChange={(e) => SetTitle(e.target.value)}
                                className="bg-[#111111] text-white w-[100%]  whitespace-pre px-3 py-3 outline-none text-xl "
                                placeholder="Title"
                            />

                            <textarea
                                value={details}
                                onChange={(e) => SetDetails(e.target.value)}
                                placeholder="Start typing"
                                className="bg-[#111111] h-[50vh] resize-none text-white w-[100%] px-3 py-3 outline-none"
                            />
                        </div>
                    </form>
                </div>
            </div> */}
        </form>
    );
};

export default EditNote;