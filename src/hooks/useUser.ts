import {useCallback, useState} from 'react';
import {getUserValues} from '../api/userApi';
import {UserValues} from '../helpers/types';
import {USERDEFAULT} from '../helpers/constants';

export const useUser = () => {
    const [userDetails, setUserDetails] = useState<UserValues>(USERDEFAULT);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const getUserDetails = useCallback(async () => {
        setIsFetching(true);
        try {
            const response = await getUserValues();
            setUserDetails(response.data);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        userDetails,
        isFetching,
        getUserDetails,
    };
};
