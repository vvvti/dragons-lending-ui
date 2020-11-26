import React from 'react';
import {StyledButton, StyledHeader, StyledNavLink} from './AuctionsHeader.styled';
import {AUTHROUTES} from '../../../helpers/routes';
import {useAuthContext} from '../../../context/auth-context';

export const AuctionsHeader: React.FC = () => {
    const {tokenStorage} = useAuthContext();

    return (
        <StyledHeader>
            <h1>Active auctions</h1>
            {!tokenStorage ? (
                <div>Please login to create an auction</div>
            ) : (
                <div>
                    <StyledNavLink to={AUTHROUTES.CREATEAUCTION}>
                        Add new auction <StyledButton color="primary">+</StyledButton>
                    </StyledNavLink>
                </div>
            )}
        </StyledHeader>
    );
};
