import {useCallback, useState} from 'react';
import {AuctionValues} from '../helpers/types';
import {deleteAuctionItem, getAuctionsList, getAuctionsListWithoutToken, postAuction} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';

export const useAuctions = () => {
    const [auctionsList, setAuctionsList] = useState<AuctionValues[]>([]);
    const [ownAuctionsList, setOwnAuctionsList] = useState<AuctionValues[]>([]);
    const {tokenStorage} = useAuthContext();
    const {goToMain} = useToPage();

    const getAuctions = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getAuctionsList(config);
            setAuctionsList(response.data);
        } else {
            const response = await getAuctionsListWithoutToken();
            setAuctionsList(response.data);
        }
    }, [tokenStorage]);

    const getOwnAuctionsList = useCallback(async () => {
        const config = {
            params: {yours: true},
            headers: {'x-authorization': tokenStorage},
        };

        const response = await getAuctionsList(config);
        setOwnAuctionsList(response.data);
    }, [tokenStorage]);

    const postNewAuction = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                const response = await postAuction(values, config);
                setAuctionsList(response.data);
            }
            goToMain();
        },
        [tokenStorage, goToMain],
    );

    const deleteAuction = useCallback(
        async (id: any) => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };
            console.log('id hook', id);

            if (tokenStorage) {
                const response = await deleteAuctionItem(id, config);
                setAuctionsList(response.data);
            }
        },
        [tokenStorage],
    );

    return {
        auctionsList,
        getAuctions,
        postNewAuction,
        getOwnAuctionsList,
        ownAuctionsList,
        deleteAuction,
    };
};
