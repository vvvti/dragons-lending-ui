import {useCallback, useState} from 'react';
import {useAuthContext} from '../context/auth-context';
import {getUserValues} from '../api/userApi';
import {userValues} from '../helpers/types';
import {USERDEFAULT} from '../helpers/constants';

export const useUser = () => {
    const [userDetails, setUserDetails] = useState<userValues>(USERDEFAULT);
    const {tokenStorage} = useAuthContext();

    const getUserDetails = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getUserValues(config);
            setUserDetails(response.data);
        }
    }, [tokenStorage]);

    return {
        userDetails,
        getUserDetails,
    };
};
