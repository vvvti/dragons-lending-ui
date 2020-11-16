import React, {useCallback, useContext, useMemo, useState} from 'react';
import {postLoginValues} from '../api/loginApi';
import {LoginFormValues} from '../helpers/types';
import {useToMain} from '../hooks/useToPage';

interface AuthContextValue {
    isLoggedIn: boolean;
    loginError: string;
    tokenStorage: string;
    login: (values: LoginFormValues) => void;
    logout: () => void;
}

const dummyValue = {
    isLoggedIn: false,
    loginError: '',
    tokenStorage: '',
    login: () => {
        console.warn('You have not provided AuthContextProvider and tried to use login function');
    },
    logout: () => {},
};

const AuthContext = React.createContext<AuthContextValue>(dummyValue);

export const AuthContextProvider: React.FC = ({children}) => {
    const loginFromLocalStorage = localStorage.getItem('isLoggedIn') === 'true';
    const tokenFromLocalStorage = localStorage.getItem('token') === null ? '' : JSON.stringify(localStorage.getItem('token'));

    const [isLoggedIn, setLoggedIn] = useState(loginFromLocalStorage);
    const [tokenStorage, setTokenStorage] = useState(tokenFromLocalStorage);
    const [loginError, setLoginError] = useState('');
    const {goToMain} = useToMain();

    const login = useCallback(
        async (values: LoginFormValues) => {
            try {
                const response = await postLoginValues(values);
                setLoginError('');
                localStorage.setItem('token', response.headers['x-authorization']);
                localStorage.setItem('isLoggedIn', 'true');
                setTokenStorage(response.headers['x-authorization']);

                setLoggedIn(true);
                goToMain();
            } catch {
                setLoginError('Please check your credentials');
                setLoggedIn(false);
                localStorage.setItem('isLoggedIn', 'false');
                setTokenStorage('');
            }
        },
        [goToMain],
    );

    const logout = useCallback(() => {
        setLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
        setTokenStorage('');
    }, []);

    const memoizedValue = useMemo(() => {
        return {
            isLoggedIn,
            login,
            logout,
            loginError,
            tokenStorage,
        };
    }, [isLoggedIn, login, logout, loginError, tokenStorage]);

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
    return useContext(AuthContext);
}
