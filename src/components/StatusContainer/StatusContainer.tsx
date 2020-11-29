import React from 'react';
import {StyledStatus, StyledText} from './StatusContainer.styled';
import {useAuthContext} from '../../context/auth-context';

export const StatusContainer: React.FC = () => {
    const {tokenStorage, validToken} = useAuthContext();

    return (
        <StyledStatus>
            <StyledText data-test-id="auth-info">{tokenStorage && `Logged in as ${validToken.sub}`}</StyledText>
        </StyledStatus>
    );
};
