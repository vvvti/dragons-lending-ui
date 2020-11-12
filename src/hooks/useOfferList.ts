import {useCallback, useState} from 'react';
import {getOffersList} from '../api/createOfferApi';

export const useOfferList = () => {
    const [loginValues, setLoginValues] = useState();

    const getOfferList = useCallback(async () => {
        const response = await getOffersList();
        setLoginValues(response.data);
    }, []);

    return {
        loginValues,
        getOfferList,
    };
};
