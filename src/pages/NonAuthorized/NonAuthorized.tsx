import React from 'react';
import {StyledContainer, StyledH1, StyledNavLink} from './NonAuthorized.styled';
import {NONAUTHROUTES} from '../../helpers/routes';

export const NonAuthorized: React.FC = () => {
    return (
        <StyledContainer>
            <StyledH1>You are not authorized</StyledH1>
            <p>
                Let's go{' '}
                <StyledNavLink data-test-id="unathorized-link" to={NONAUTHROUTES.LOGIN}>
                    login
                </StyledNavLink>{' '}
                and try from there.
            </p>
        </StyledContainer>
    );
};
