import {useCallback, useState} from 'react';
import {deleteOfferItem, getOffersList, postOffersList} from '../api/offersApi';
import {Offers} from '../helpers/types';

export const useOffers = () => {
    const [offersList, setOffersList] = useState<Offers[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getOffers = useCallback(async () => {
        const response = await getOffersList();
        setOffersList(response.data);
    }, []);

    const postOffers = useCallback(async values => {
        try {
            await postOffersList(values);
            setErrorMessage('');
        } catch {
            setErrorMessage('Something went wrong, please try again');
        }
    }, []);

    const deleteOffer = useCallback(async (id: any) => {
        const response = await deleteOfferItem(id);
        setOffersList(response.data);
    }, []);

    return {
        offersList,
        getOffers,
        errorMessage,
        postOffers,
        deleteOffer,
    };
};
