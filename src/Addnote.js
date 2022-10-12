import { useState } from "react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../src/firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'


const Addnote = () => {
    const [title, SetTitle] = useState("")
    const [details, SetDetails] = useState("")
    const colRef = collection(db, 'Notes')
    const navigate = useNavigate()
    const auth = getAuth();

    function handleSubmit(e) {
        e.preventDefault()

        if (title || details !== "") {
            addDoc(colRef, {
                title,
                note: details,
                user: auth.currentUser.uid,
                createdAt: serverTimestamp(),
            })
                .then(() => {
                    SetTitle("")
                    SetDetails("")
                    navigate("/")
                })
                .catch(err => {
                    alert(err.message)
                })
        }
        else {
            alert("empty fields")
        }
    }

    return (
        <div className="text-white py-10">
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
        </div>
    );
}

export default Addnote;