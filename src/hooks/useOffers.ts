import {useCallback, useState} from 'react';
import {useAuthContext} from '../context/auth-context';
import {deleteOfferItem, getOffersList, postOffersList} from '../api/offersApi';
import {Offers} from '../helpers/types';

export const useOffers = () => {
    const [offersList, setOffersList] = useState<Offers[]>([]);
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
                const response = await postOffersList(values, config);
                setOffersList(response.data);
            }
        },
        [tokenStorage],
    );

    //TODO: waiting backend implementation
    const deleteOffer = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        const id = '700d3b8a-7264-44e9-aa9f-0231a65516ac';

        if (tokenStorage) {
            const response = await deleteOfferItem(id, config);
            setOffersList(response.data);
        }
    }, [tokenStorage]);

    return {
        offersList,
        getOffers,
        postOffers,
        deleteOffer,
    };
};
