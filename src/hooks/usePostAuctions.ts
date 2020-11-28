import {useCallback, useState} from 'react';
import {postAuction} from '../api/auctionsApi';
import {useToPage} from './useToPage';

export const usePostAuctions = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const {goToMain} = useToPage();

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

    return {
        errorMessage,
        postNewAuction,
    };
};
