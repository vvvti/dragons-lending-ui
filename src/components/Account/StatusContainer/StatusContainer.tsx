import React from 'react';
import {StyledText, StyledStatus} from './StatusContainer.styled';
import {useAuthContext} from '../../../context/auth-context';
import jwtDecode from 'jwt-decode';

export const StatusContainer: React.FC = () => {
    const {isLoggedIn, tokenStorage} = useAuthContext();
    let validToken: any;

    if (tokenStorage) {
        validToken = jwtDecode(tokenStorage);
    }
    return <StyledStatus>{isLoggedIn && <StyledText>{tokenStorage && `Logged in as ${validToken.sub}`}</StyledText>}</StyledStatus>;
};
