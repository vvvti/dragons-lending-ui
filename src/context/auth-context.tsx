import React, {useCallback, useContext, useMemo, useState} from 'react';
import {postLoginValues} from '../api/loginApi';
import {LoginFormValues} from '../helpers/types';
import {useBack} from '../hooks/useBack';

interface AuthContextValue {
    isLoggedIn: boolean;
    loginError: string;
    login: (values: LoginFormValues) => void;
    logout: () => void;
}

// this is overridden inside AuthContextProvider anyway
const dummyValue = {
    isLoggedIn: false,
    loginError: '',
    login: () => {
        console.warn('You have not provided AuthContextProvider and tried to use login function');
    },
    logout: () => {},
};

const AuthContext = React.createContext<AuthContextValue>(dummyValue);

export const AuthContextProvider: React.FC = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const {goBack} = useBack();

    const login = useCallback(async (values: LoginFormValues) => {
        try {
            const response = await postLoginValues(values);
            console.log('loginResponse', response.headers);
            setLoginError('');
            setLoggedIn(true);
            goBack();
        } catch {
            setLoginError('Please check your credentials');
            setLoggedIn(false);
        }
    }, []);

    const logout = useCallback(() => {
        setLoggedIn(false);
    }, []);

    const memoizedValue = useMemo(() => {
        return {
            isLoggedIn,
            login,
            logout,
            loginError,
        };
    }, [isLoggedIn, login, logout, loginError]);

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
    return useContext(AuthContext);
}
