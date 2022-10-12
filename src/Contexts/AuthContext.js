import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(false)

    return (
        <AuthContext.Provider value={{ user,setUser}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;