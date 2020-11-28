import {useCallback, useState} from 'react';
import {AuctionValues} from '../helpers/types';
import {deleteAuctionItem, getAuctionsList, getAuctionsListWithoutToken, postAuction} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';

export const useAuctions = () => {
    const [auctionsList, setAuctionsList] = useState<AuctionValues[]>([]);
    const [ownAuctionsList, setOwnAuctionsList] = useState<AuctionValues[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {tokenStorage} = useAuthContext();
    const {goToMain} = useToPage();

    const getAuctions = useCallback(async () => {
        if (tokenStorage) {
            const response = await getAuctionsList();
            setAuctionsList(response.data);
        } else {
            const response = await getAuctionsListWithoutToken();
            setAuctionsList(response.data);
        }
    }, [tokenStorage]);

    const getOwnAuctionsList = useCallback(async () => {
        const config = {
            params: {yours: true},
        };

        const response = await getAuctionsList(config);
        setOwnAuctionsList(response.data);
    }, []);

    const postNewAuction = useCallback(
        async values => {
            try {
                await postAuction(values);
                setErrorMessage('');
                goToMain();
            } catch {
                setErrorMessage('Something went wrong, please try again');
            }
        },
        [goToMain],
    );

    const deleteAuction = useCallback(async (id: any) => {
        const response = await deleteAuctionItem(id);
        setAuctionsList(response.data);
    }, []);

    return {
        auctionsList,
        getAuctions,
        errorMessage,
        postNewAuction,
        getOwnAuctionsList,
        ownAuctionsList,
        deleteAuction,
    };
};
