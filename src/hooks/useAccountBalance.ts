import {useCallback, useState} from 'react';
import {AccountBalance} from '../helpers/types';
import {INITIAL_ACCOUNT_BALANCE} from '../helpers/constants';
import {getAccountBalance, postDeposit, postWithdraw} from '../api/accountBalanceApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';

export const useAccountBalance = () => {
    const [accountBalance, setAccountBalance] = useState<AccountBalance>(INITIAL_ACCOUNT_BALANCE);
    const [serverMessage, setServerMessage] = useState('');
    const {tokenStorage} = useAuthContext();
    const {goToUserAccount} = useToPage();

    const getAccountValue = useCallback(async () => {
        if (tokenStorage) {
            const response = await getAccountBalance();
            setAccountBalance(response.data);
        }
    }, [tokenStorage]);

    const postDepositAmount = useCallback(
        async values => {
            try {
                await postDeposit(values);
                goToUserAccount();
            } catch {
                setServerMessage('Something went wrong, please try again');
            }
        },
        [goToUserAccount],
    );

    const postWithdrawAmount = useCallback(
        async values => {
            try {
                await postWithdraw(values);
                goToUserAccount();
            } catch {
                setServerMessage('Something went wrong, please try again');
            }
        },
        [goToUserAccount],
    );

    return {
        accountBalance,
        serverMessage,
        postDepositAmount,
        getAccountValue,
        postWithdrawAmount,
    };
};
