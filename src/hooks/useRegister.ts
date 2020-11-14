import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useToMain} from './useToMain';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {goToMain} = useToMain();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                localStorage.setItem('isLoggedIn', 'true');
                goToMain();
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [goToMain],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
