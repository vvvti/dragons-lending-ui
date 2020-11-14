import React, {useCallback, useContext, useMemo, useState} from 'react';
import {postLoginValues} from '../api/loginApi';
import {LoginFormValues} from '../helpers/types';
import {useToMain} from '../hooks/useToMain';

interface AuthContextValue {
    isLoggedIn: boolean;
    loginError: string;
    login: (values: LoginFormValues) => void;
    logout: () => void;
    setLoggedIn: any;
}

const dummyValue = {
    isLoggedIn: false,
    loginError: '',
    login: () => {
        console.warn('You have not provided AuthContextProvider and tried to use login function');
    },
    logout: () => {},
    setLoggedIn: () => {},
};

const AuthContext = React.createContext<AuthContextValue>(dummyValue);

export const AuthContextProvider: React.FC = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const {goToMain} = useToMain();

    const login = useCallback(
        async (values: LoginFormValues) => {
            try {
                const response = await postLoginValues(values);
                console.log('loginResponse', response.headers);
                setLoginError('');
                setLoggedIn(true);
                goToMain();
            } catch {
                setLoginError('Please check your credentials');
                setLoggedIn(false);
            }
        },
        [goToMain],
    );

    const logout = useCallback(() => {
        setLoggedIn(false);
    }, []);

    const memoizedValue = useMemo(() => {
        return {
            isLoggedIn,
            login,
            logout,
            loginError,
            setLoggedIn,
        };
    }, [isLoggedIn, login, logout, loginError, setLoggedIn]);

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
    return useContext(AuthContext);
}
