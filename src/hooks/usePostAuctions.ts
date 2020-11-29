import {useCallback, useState} from 'react';
import {postAuction} from '../api/auctionsApi';
import {useToPage} from './useToPage';

export const usePostAuctions = () => {
    const [serverMessage, setServerMessage] = useState('');
    const {goToMain} = useToPage();

    const postNewAuction = useCallback(
        async values => {
            try {
                await postAuction(values);
                setServerMessage('');
                goToMain();
            } catch {
                setServerMessage('Something went wrong, please try again');
            }
        },
        [goToMain],
    );

    return {
        serverMessage,
        postNewAuction,
    };
};
