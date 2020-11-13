import {useCallback, useState} from 'react';
import {RegisterFormValues} from '../helpers/types';
import {postRegisterValues} from '../api/registerApi';
import {useBack} from './useBack';

export const useRegister = () => {
    const [registerValues, setRegisterValues] = useState();
    const [registerError, setRegisterError] = useState('');
    const {goBack} = useBack();

    const postRegister = useCallback(
        async (values: RegisterFormValues) => {
            try {
                const response = await postRegisterValues(values);
                setRegisterValues(response.data);
                goBack();
            } catch {
                setRegisterError('Please insert another username and email address');
            }
        },
        [goBack],
    );

    return {
        registerValues,
        postRegister,
        registerError,
    };
};
