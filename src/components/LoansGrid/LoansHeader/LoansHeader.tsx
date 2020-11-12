import React from 'react';
import {StyledButton, StyledHeader, StyledNavLink} from './LoansHeader.styled';
import {ROUTES} from '../../../helpers/routes';

export const LoansHeader: React.FC = () => {
    return (
        <StyledHeader>
            <h1>Active loan applications</h1>
            <StyledNavLink to={ROUTES.CREATEOFFER}>
                Add new loan <StyledButton color="primary">+</StyledButton>
            </StyledNavLink>
        </StyledHeader>
    );
};
