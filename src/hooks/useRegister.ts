import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useAuthContext} from '../context/auth-context';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {login} = useAuthContext();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                await login({email: values.email, password: values.password});
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [login],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
