import React from 'react';
import {NONAUTHROUTES} from '../../helpers/routes';
import {StyledContainer, StyledH1} from './NotFoundPage.styled';
import {StyledNavLink} from './NotFoundPage.styled';

export const NotFoundPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledH1>404</StyledH1>
            <p>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
            <p>
                Let's go{' '}
                <StyledNavLink data-test-id="home-link" to={NONAUTHROUTES.HOME}>
                    {' '}
                    home
                </StyledNavLink>{' '}
                and try from there.
            </p>
        </StyledContainer>
    );
};
