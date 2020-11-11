import React, {useCallback, useContext, useMemo, useState} from 'react';

interface AuthContextValue {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

// this is overridden inside AuthContextProvider anyway
const dummyValue = {
    isLoggedIn: false,
    login: () => {
    },
    logout: () => {
    },
};

const AuthContext = React.createContext<AuthContextValue>(dummyValue);

export const AuthContextProvider: React.FC = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = useCallback(() => {
        setLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setLoggedIn(false);
    }, []);

    const memoizedValue = useMemo(() => {
        return {
            isLoggedIn,
            login,
            logout,
        };
    }, [isLoggedIn, login, logout]);

    return (<AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>);
};

export function useAuthContext() {
    return useContext(AuthContext);
}
