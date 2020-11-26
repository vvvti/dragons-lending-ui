import React, {useCallback, useContext, useMemo, useState} from 'react';
import {postLoginValues} from '../api/loginApi';
import {LoginFormValues} from '../helpers/types';
import {useToPage} from '../hooks/useToPage';
import jwtDecode from 'jwt-decode';

interface AuthContextValue {
    loginError: string;
    tokenStorage: string;
    login: (values: LoginFormValues) => void;
    logout: () => void;
    setTokenStorage: any;
}

const dummyValue = {
    loginError: '',
    tokenStorage: '',
    login: () => {},
    logout: () => {},
    setTokenStorage: () => {},
};

const AuthContext = React.createContext<AuthContextValue>(dummyValue);

export const AuthContextProvider: React.FC = ({children}) => {
    const tokenFromLocalStorage = localStorage.getItem('token') ?? '';

    const [tokenStorage, setTokenStorage] = useState(tokenFromLocalStorage);
    const [loginError, setLoginError] = useState('');
    const {goToMain} = useToPage();
    let validToken: any;

    if (tokenStorage) {
        validToken = jwtDecode(tokenStorage);
        const {exp} = validToken;
        if (Date.now() >= exp * 1000) {
            localStorage.removeItem('token');
            setTokenStorage('');
            goToMain();
        }
    }

    const login = useCallback(
        async (values: LoginFormValues) => {
            try {
                const response = await postLoginValues(values);
                console.log();
                setLoginError('');
                localStorage.setItem('token', response.headers['x-authorization']);
                setTokenStorage(response.headers['x-authorization']);
                goToMain();
            } catch {
                setLoginError('Please check your credentials');
                setTokenStorage('');
            }
        },
        [goToMain],
    );

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setTokenStorage('');
        goToMain();
    }, [goToMain]);

    const memoizedValue = useMemo(() => {
        return {
            login,
            logout,
            loginError,
            tokenStorage,
            setTokenStorage,
        };
    }, [login, logout, loginError, tokenStorage, setTokenStorage]);

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
    return useContext(AuthContext);
}
