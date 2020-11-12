import {useCallback, useState} from 'react';
import {LoginFormValues} from '../helpers/types';
import {postLoginValues} from '../api/loginApi';

export const useLogin = () => {
    const [offerList, setOfferList] = useState();

    const getLogin = useCallback(async (values: LoginFormValues) => {
        console.log('before login', values);
        const response = await postLoginValues(values);
        setOfferList(response.data);
        console.log('after login', response.data);
    }, []);

    return {
        offerList,
        getLogin,
    };
};
