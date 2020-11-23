import {useCallback, useState} from 'react';
import {AccountBalance, DepositAmount, WithdrawnAmount} from '../helpers/types';
import {INITIAL_ACCOUNT_BALANCE, INITIAL_DEPOSIT_VALUES} from '../helpers/constants';
import {getAccountBalance, postDeposit, postWithdraw} from '../api/accountBalanceApi';
import {useAuthContext} from '../context/auth-context';

export const useAccountBalance = () => {
    const [depositAmount, setDepositAmount] = useState<DepositAmount>(INITIAL_DEPOSIT_VALUES);
    const [withdrawAmount, setWithdrawAmount] = useState<WithdrawnAmount>();
    const [accountBalance, setAccountBalance] = useState<AccountBalance>(INITIAL_ACCOUNT_BALANCE);
    const {tokenStorage} = useAuthContext();

    const getAccountValue = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getAccountBalance(config);
            setAccountBalance(response.data);
        }
    }, []);

    const postDepositAmount = useCallback(async values => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            console.log('authorization', values, tokenStorage);
            const response = await postDeposit(values, config);

            setDepositAmount(response.data);
        }
    }, []);

    const postWithdrawAmount = useCallback(async values => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        console.log('postWithdraw', values, config);
        const response = await postWithdraw(values, config);
        setWithdrawAmount(response.data);
    }, []);

    return {
        withdrawAmount,
        depositAmount,
        accountBalance,
        postDepositAmount,
        getAccountValue,
        postWithdrawAmount,
    };
};
