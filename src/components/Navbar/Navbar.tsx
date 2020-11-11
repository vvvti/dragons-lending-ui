import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledLogo, StyledMenu, StyledNavbar, StyledNavLink, StyledTitle} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';

export const Navbar: React.FC = () => {
    return (
        <StyledNavbar data-testid={'main-navbar'}>
            <StyledLogo>
                <StyledNavLink to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledNavLink>
            </StyledLogo>
            <StyledNavLink to={ROUTES.HOME}>
                <StyledTitle to={ROUTES.HOME}>Dragons lending</StyledTitle>
            </StyledNavLink>
            <StyledMenu>
                <StyledNavLink to={ROUTES.ABOUT}>ABOUT</StyledNavLink>
                <StyledNavLink to={ROUTES.RULES}>RULES</StyledNavLink>
                <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
                <StyledNavLink to={ROUTES.REGISTRATION}>Register</StyledNavLink>
            </StyledMenu>
        </StyledNavbar>
    );
};
