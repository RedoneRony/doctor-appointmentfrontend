import React, { createContext } from 'react';
import useFirebase from './../../hooks/useFirebase';

export const AuthContext = createContext(null);
// wrap all the authentication in context api 
const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;