import {useCallback, useState} from 'react';
import {getReceivedOffersList} from '../api/offersApi';
import {Offers} from '../helpers/types';

export const useReceivedOffers = () => {
    const [receivedOffersList, setReceivedOffersList] = useState<Offers[]>([]);

    const getReceivedOffers = useCallback(async () => {
        const response = await getReceivedOffersList();
        setReceivedOffersList(response.data);
    }, []);

    return {
        receivedOffersList,
        getReceivedOffers,
    };
};
