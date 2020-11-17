import {useCallback, useState} from 'react';
import {CreateOfferFormValues} from '../helpers/types';
import {INITIAL_CREATEOFFER_VALUES} from '../helpers/constants';
import {getOffersList, getOffersListWithoutToken, postOffer} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';

export const useOffer = () => {
    const [offersList, setOffersList] = useState<CreateOfferFormValues>(INITIAL_CREATEOFFER_VALUES);
    const {tokenStorage} = useAuthContext();

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
        },
        [tokenStorage],
    );

    return {
        offersList,
        getOffers,
        postNewOffer,
    };
};
