import {useCallback, useState} from 'react';
import {getUserValues} from '../api/userApi';
import {userValues} from '../helpers/types';
import {USERDEFAULT} from '../helpers/constants';

export const useUser = () => {
    const [userDetails, setUserDetails] = useState<userValues>(USERDEFAULT);

    const getUserDetails = useCallback(async () => {
        const response = await getUserValues();
        setUserDetails(response.data);
    }, []);

    return {
        userDetails,
        getUserDetails,
    };
};
