import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useToLogin} from './useToPage';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {goToLogin} = useToLogin();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                localStorage.setItem('isLoggedIn', 'true');
                goToLogin();
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [goToLogin],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
