import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import Navbar from './Navbar';
import Notes from './Notes';

export const Home = () => {


    return (
        <div className="addnote">
            <Navbar />
            <div className="search contain flex items-center">
                <SearchIcon className='absolute mx-2' />
                <input type="search" className="bg-gray-900 w-full rounded-full p-3 outline-none px-10"
                    placeholder="Search notes"
                />
            </div>
            <Notes />
        </div>
    );
}
