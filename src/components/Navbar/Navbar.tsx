import React from 'react';
import dragonImage from '../../assets/dragon_logo.png';
import {Logo, StyledAccount, StyledAvatar, StyledLogoContainer, StyledMenu, StyledNavbar, StyledNavLink} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const Navbar: React.FC = () => {
    const {tokenStorage} = useAuthContext();

    return (
        <StyledNavbar data-testid={'main-navbar'}>
            <StyledLogoContainer>
                <StyledNavLink to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledNavLink>
            </StyledLogoContainer>
            <StyledMenu>
                <StyledNavLink to={ROUTES.OFFERSGRID}>AUCTIONS</StyledNavLink>
                <StyledNavLink to={ROUTES.CONTACT}>CONTACT</StyledNavLink>
                <StyledNavLink to={ROUTES.RULES}>RULES</StyledNavLink>
                <StyledNavLink to={ROUTES.ABOUT}>ABOUT</StyledNavLink>

                {tokenStorage ? (
                    <StyledAccount to={ROUTES.USERACCOUNT}>
                        Account <StyledAvatar />
                    </StyledAccount>
                ) : (
                    <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
                )}
            </StyledMenu>
        </StyledNavbar>
    );
};
