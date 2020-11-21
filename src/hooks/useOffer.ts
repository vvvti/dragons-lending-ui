import {useCallback, useState} from 'react';
import {OffersArray} from '../helpers/types';
import {getOffersList, getOffersListWithoutToken, postOffer} from '../api/offersApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';

export const useOffer = () => {
    // const [offersList, setOffersList] = useState<OffersArray>([OFFER_VALUES]);
    const [offersList, setOffersList] = useState<OffersArray>([]);
    const {tokenStorage} = useAuthContext();
    const {goToMain} = useToPage();

    const getOffers = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getOffersList(config);
            console.log('get offer login', response.data);
            setOffersList(response.data);
        } else {
            const response = await getOffersListWithoutToken();
            console.log('get offer without login', response.data);
            setOffersList(response.data);
        }
    }, [tokenStorage]);

    // const getOwnOffers = useCallback(async () => {
    //     const config = {
    //         headers: {'x-authorization': tokenStorage},
    //     };
    //
    //     const response = await getOwnOffersList(config);
    //     console.log("get own offer", response.data)
    //     setOffersList(response.data);
    //
    // }, [tokenStorage]);

    const postNewOffer = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };
            if (tokenStorage) {
                const response = await postOffer(values, config);
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
