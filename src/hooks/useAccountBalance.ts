import {useCallback, useState} from 'react';
import {AccountBalance, DepositAmount, WithdrawnAmount} from '../helpers/types';
import {INITIAL_ACCOUNT_BALANCE, INITIAL_DEPOSIT_VALUES} from '../helpers/constants';
import {getAccountBalance, postDeposit, postWithdraw} from '../api/accountBalanceApi';
import {useAuthContext} from '../context/auth-context';
import {useToPage} from './useToPage';

export const useAccountBalance = () => {
    const [depositAmount, setDepositAmount] = useState<DepositAmount>(INITIAL_DEPOSIT_VALUES);
    const [withdrawAmount, setWithdrawAmount] = useState<WithdrawnAmount>();
    const [accountBalance, setAccountBalance] = useState<AccountBalance>(INITIAL_ACCOUNT_BALANCE);
    const [errorMessage, setErrorMessage] = useState('');
    const {tokenStorage} = useAuthContext();

    const {goToUserAccount} = useToPage();

    const getAccountValue = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getAccountBalance(config);
            setAccountBalance(response.data);
        }
    }, [tokenStorage]);

    const postDepositAmount = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                try {
                    const response = await postDeposit(values, config);
                    setDepositAmount(response.data);
                    goToUserAccount();
                } catch {
                    setErrorMessage('Something went wrong, please try again');
                }
            }
        },
        [tokenStorage, goToUserAccount],
    );

    const postWithdrawAmount = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                try {
                    const response = await postWithdraw(values, config);
                    setWithdrawAmount(response.data);
                    goToUserAccount();
                } catch {
                    setErrorMessage('Something went wrong, please try again');
                }
            }
        },
        [tokenStorage, goToUserAccount],
    );

    return {
        withdrawAmount,
        depositAmount,
        accountBalance,
        errorMessage,
        postDepositAmount,
        getAccountValue,
        postWithdrawAmount,
    };
};
