import React from 'react';
import dragonImage from '../../assets/dragon_logo.png';
import {Logo, StyledAccount, StyledAvatar, StyledLogoContainer, StyledMenu, StyledNavbar, StyledNavLink} from './Navbar.styled';
import {AUTHROUTES, NONAUTHROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const Navbar: React.FC = () => {
    const {tokenStorage} = useAuthContext();

    return (
        <StyledNavbar>
            <StyledLogoContainer>
                <StyledNavLink to={NONAUTHROUTES.HOME}>
                    <Logo src={dragonImage} alt="" />
                </StyledNavLink>
            </StyledLogoContainer>
            <StyledMenu>
                <StyledNavLink data-test-id="auctions-link" to={NONAUTHROUTES.AUCTIONSGRID}>
                    auctions
                </StyledNavLink>
                <StyledNavLink to={NONAUTHROUTES.CONTACT}>contact</StyledNavLink>
                <StyledNavLink to={NONAUTHROUTES.RULES}>rules</StyledNavLink>
                <StyledNavLink to={NONAUTHROUTES.ABOUT}>about</StyledNavLink>

                {tokenStorage ? (
                    <StyledAccount data-test-id="account-link" to={AUTHROUTES.USERACCOUNT}>
                        Account <StyledAvatar />
                    </StyledAccount>
                ) : (
                    <StyledNavLink data-test-id="login-link" to={NONAUTHROUTES.LOGIN}>
                        login
                    </StyledNavLink>
                )}
            </StyledMenu>
        </StyledNavbar>
    );
};
