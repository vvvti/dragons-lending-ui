import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, LogoContainer, StyledLogin, StyledMenu, StyledNavbar, StyledRegister, StyledRules, StyledTitle} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';

export const Navbar = () => {
    return (
        <StyledNavbar data-testid={'investments-results'}>
            <StyledMenu>
                <LogoContainer>
                    <StyledLogin to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledLogin>
                </LogoContainer>
            </StyledMenu>
            <StyledLogin to={ROUTES.HOME}>
                <StyledTitle>Dragons lending</StyledTitle>
            </StyledLogin>
            <StyledMenu>
                <StyledRules to={ROUTES.ABOUT}>ABOUT</StyledRules>
                <StyledRules to={ROUTES.RULES}>RULES</StyledRules>
                <StyledLogin to={ROUTES.LOGIN}>Login</StyledLogin>
                <StyledRegister to={ROUTES.REGISTRATION}>Register</StyledRegister>
            </StyledMenu>
        </StyledNavbar>
    );
};
