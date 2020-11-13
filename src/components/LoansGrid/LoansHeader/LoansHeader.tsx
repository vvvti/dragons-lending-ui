import React from 'react';
import {StyledButton, StyledHeader, StyledNavLink} from './LoansHeader.styled';
import {ROUTES} from '../../../helpers/routes';
import {useAuthContext} from '../../../context/auth-context';

export const LoansHeader: React.FC = () => {
    const {isLoggedIn} = useAuthContext();

    return (
        <StyledHeader>
            <h1>Active loan applications</h1>
            {!isLoggedIn ? (
                <div>Please login to create an offer</div>
            ) : (
                <div>
                    <StyledNavLink to={ROUTES.CREATEOFFER}>
                        Add new loan <StyledButton color="primary">+</StyledButton>
                    </StyledNavLink>
                </div>
            )}
        </StyledHeader>
    );
};
