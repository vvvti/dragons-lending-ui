import {useCallback, useState} from 'react';
import {LoginFormValues} from '../helpers/types';
import {postLoginValues} from '../api/loginApi';
import {useBack} from './useBack';

export const useLogin = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const {goBack} = useBack();

    const getLogin = useCallback(
        async (values: LoginFormValues) => {
            try {
                const response = await postLoginValues(values);
                console.log('loginResponse', response.headers);
                setLoggedIn(true);
                goBack();
            } catch {
                setLoginError('Please check your credentials');
            }
        },
        [goBack],
    );

    return {
        isLoggedIn,
        getLogin,
        loginError,
    };
};
