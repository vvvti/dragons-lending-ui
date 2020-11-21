import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {
    Logo,
    StyledAccount,
    StyledAvatar,
    StyledLogoContainer,
    StyledMenu,
    StyledNavbar,
    StyledNavLink,
    StyledTitle,
} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const Navbar: React.FC = () => {
    const {tokenStorage} = useAuthContext();

    return (
        <StyledNavbar data-testid={'main-navbar'}>
            <StyledLogoContainer>
                <StyledNavLink to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledNavLink>
                <StyledTitle to={ROUTES.OFFERSGRID}>Dragons lending</StyledTitle>
            </StyledLogoContainer>
            <StyledMenu>
                <StyledNavLink to={ROUTES.ABOUT}>ABOUT</StyledNavLink>
                <StyledNavLink to={ROUTES.OFFERSGRID}>AUCTIONS</StyledNavLink>
                <StyledNavLink to={ROUTES.CONTACT}>CONTACT</StyledNavLink>
                <StyledNavLink to={ROUTES.RULES}>RULES</StyledNavLink>

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
