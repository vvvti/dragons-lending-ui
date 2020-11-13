import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');

    const postRegister = useCallback(async (values: RegisterFormValues) => {
        try {
            const response = await postRegisterValues(values);
            setRegisterValues(response.data);
        } catch {
            setRegisterError('Existing user, please insert another email address');
        }
    }, []);

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
