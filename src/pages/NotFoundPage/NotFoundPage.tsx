import React from 'react';
import {ROUTES} from '../../helpers/routes';
import {StyledContainer} from './NotFoundPage.styled';
import {Link} from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
    return (
        <StyledContainer>
            Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
            <p>
                Let's go <Link to={ROUTES.HOME}>HOME</Link> and try from there.
            </p>
        </StyledContainer>
    );
};
