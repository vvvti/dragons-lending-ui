import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();

    const postRegister = useCallback(async (values: RegisterFormValues) => {
        console.log('before Register', values);
        const response = await postRegisterValues(values);
        setRegisterValues(response.data);
        console.log('after Register', response.data);
    }, []);

    return {
        registerValues,
        postRegister,
    };
};
