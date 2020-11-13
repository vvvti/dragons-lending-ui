import {useCallback, useState} from 'react';
import {LoginFormValues} from '../helpers/types';
import {postLoginValues} from '../api/loginApi';

export const useLogin = () => {
    const [offerList, setOfferList] = useState();
    const [loginError, setLoginError] = useState('');

    const getLogin = useCallback(async (values: LoginFormValues) => {
        try {
            const response = await postLoginValues(values);
            setOfferList(response.data);
        } catch {
            setLoginError('Please check your credentials');
        }
    }, []);

    return {
        offerList,
        getLogin,
        loginError,
    };
};
