import {useCallback, useState} from 'react';
import {OffersArray} from '../helpers/types';
import {getOffersList, getOffersListWithoutToken, postOffer} from '../api/offersApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';
import {OFFER_VALUES} from '../helpers/constants';

export const useOffer = () => {
    const [offersList, setOffersList] = useState<OffersArray>([OFFER_VALUES]);
    const {tokenStorage} = useAuthContext();
    const {goToMain} = useToPage();

    const getOffers = useCallback(async () => {
        const data = {
            headers: {'x-authorization': tokenStorage},
        };
        if (tokenStorage) {
            const response = await getOffersList(data);
            setOffersList(response.data);
        } else {
            const response = await getOffersListWithoutToken();
            setOffersList(response.data);
        }
    }, [tokenStorage]);

    const postNewOffer = useCallback(
        async values => {
            const head = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                const response = await postOffer(values, head);
                setOffersList(response.data);
            } else {
                const response = await getOffersListWithoutToken();
                setOffersList(response.data);
            }
            goToMain();
        },
        [tokenStorage, goToMain],
    );

    return {
        offersList,
        getOffers,
        postNewOffer,
    };
};
