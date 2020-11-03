import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, LogoContainer, StyledLogin, StyledMenu, StyledNavbar, StyledRegister, StyledTitle} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                <LogoContainer>
                    <StyledLogin to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledLogin>
                </LogoContainer>
            </StyledMenu>
            <StyledTitle>Dragons lending</StyledTitle>
            <StyledMenu>
                <StyledLogin to={ROUTES.LOGIN}>Login</StyledLogin>
                <StyledRegister to={ROUTES.REGISTER}>Register</StyledRegister>
            </StyledMenu>
        </StyledNavbar>
    );
};
