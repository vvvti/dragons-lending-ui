import {useCallback, useState} from 'react';
import {useAuthContext} from '../context/auth-context';
import {deleteOfferItem, getOffersList, postOffersList} from '../api/offersApi';
import {Offers} from '../helpers/types';

export const useOffers = () => {
    const [offersList, setOffersList] = useState<Offers[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {tokenStorage} = useAuthContext();

    const getOffers = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getOffersList(config);
            setOffersList(response.data);
        }
    }, [tokenStorage]);

    const postOffers = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                try {
                    await postOffersList(values, config);
                    setErrorMessage('');
                } catch {
                    setErrorMessage('Something went wrong, please try again');
                }
            }
        },
        [tokenStorage],
    );

    //TODO: waiting backend implementation
    const deleteOffer = useCallback(
        async (id: any) => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                const response = await deleteOfferItem(id, config);
                setOffersList(response.data);
            }
        },
        [tokenStorage],
    );

    return {
        offersList,
        getOffers,
        errorMessage,
        postOffers,
        deleteOffer,
    };
};
