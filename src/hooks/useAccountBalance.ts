import {useCallback, useState} from 'react';
import {DepositAmount} from '../helpers/types';

import {INITIAL_DEPOSIT_VALUES} from '../helpers/constants';
import {postDeposit} from '../api/accountBalanceApi';

export const useAccountBalance = () => {
    const [accountBalance, setAccountBalance] = useState<DepositAmount>(INITIAL_DEPOSIT_VALUES);

    const postDepositAmount = useCallback(async () => {
        const response = await postDeposit();
        console.log('postDeposit', response.data);
        setAccountBalance(response.data);
    }, []);

    // const getAccountAmount = useCallback(async () => {
    //
    //     const response = await getAccountBalance();
    //     console.log('getAccountBalance', response.data);
    //     setAccountBalance(response.data);
    // }, []);

    return {
        accountBalance,
        postDepositAmount,
    };
};
