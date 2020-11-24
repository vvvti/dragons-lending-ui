import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useToPage} from './useToPage';
import {useAuthContext} from '../context/auth-context';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {goToMain} = useToPage();
    const {login} = useAuthContext();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                setTimeout(login(values), 5000);
                goToMain();
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [goToMain, login],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
