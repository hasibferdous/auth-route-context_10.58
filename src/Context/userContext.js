import React, { createContext } from 'react';

const AuthContext = createContext();

const userContext = ({children}) => {
    
    const user = {displayName: 'Aakash'}
    const authInfo = {user: user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default userContext;