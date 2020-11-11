import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledLogo, StyledMenu, StyledNavbar, StyledRules, StyledTitle} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';

export const Navbar = () => {
    return (
        <StyledNavbar data-testid={'main-navbar'}>
            <StyledLogo>
                <StyledRules to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledRules>
            </StyledLogo>
            <StyledTitle to={ROUTES.HOME}>Dragons lending</StyledTitle>
            <StyledMenu>
                <StyledRules to={ROUTES.ABOUT}>ABOUT</StyledRules>
                <StyledRules to={ROUTES.RULES}>RULES</StyledRules>
                <StyledRules to={ROUTES.LOGIN}>Login</StyledRules>
                <StyledRules to={ROUTES.REGISTRATION}>Register</StyledRules>
            </StyledMenu>
        </StyledNavbar>
    );
};
