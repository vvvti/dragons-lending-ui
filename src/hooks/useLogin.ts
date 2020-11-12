import {useCallback, useState} from 'react';
import {getLoginValues} from '../api/loginApi';
import {LoginFormValues} from '../helpers/types';

export const useLogin = () => {
    const [offerList, setOfferList] = useState();

    const getLogin = useCallback(async (values: LoginFormValues) => {
        console.log('before login', values);
        const response = await getLoginValues(values);
        setOfferList(response.data);
        console.log('after login', response.data);
    }, []);

    return {
        offerList,
        getLogin,
    };
};
