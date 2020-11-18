import {useCallback, useState} from 'react';
import {CreateOfferFormArray} from '../helpers/types';
import {getOffersList, getOffersListWithoutToken, postOffer} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';
import {useToMain} from './useToPage';
import {INITIAL_CREATEOFFER_ARRAY} from '../helpers/constants';

export const useOffer = () => {
    const [offersList, setOffersList] = useState<CreateOfferFormArray>(INITIAL_CREATEOFFER_ARRAY);
    const {tokenStorage} = useAuthContext();
    const {goToMain} = useToMain();

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
