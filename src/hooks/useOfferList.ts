import {useCallback, useState} from 'react';
import {getOffersList} from '../api/createOfferApi';

export const useOfferList = () => {
    const [offerList, setOfferList] = useState();

    const getOfferList = useCallback(async () => {
        const response = await getOffersList();
        setOfferList(response.data);
    }, []);

    return {
        offerList,
        getOfferList,
    };
};
