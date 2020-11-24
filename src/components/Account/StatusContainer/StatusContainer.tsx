import React from 'react';
import {StyledStatus, StyledText} from './StatusContainer.styled';
import {useAuthContext} from '../../../context/auth-context';
import jwtDecode from 'jwt-decode';

export const StatusContainer: React.FC = () => {
    const {tokenStorage, setTokenStorage} = useAuthContext();

    let validToken: any;

    if (tokenStorage) {
        validToken = jwtDecode(tokenStorage);
    }

    if (validToken) {
        const {exp} = validToken;
        if (Date.now() >= exp * 1000) {
            localStorage.removeItem('token');
            setTokenStorage('');
        }
    }

    return (
        <StyledStatus>
            <StyledText>{tokenStorage && `Logged in as ${validToken.sub}`}</StyledText>
        </StyledStatus>
    );
};
