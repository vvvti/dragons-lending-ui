import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, LogoContainer, StyledLogin, StyledMenu, StyledNavbar, StyledRegister, StyledTitle, StyledRules} from './Navbar.styled';
import {RoutesConst} from '../../helpers/routesConst';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                <LogoContainer>
                    <StyledLogin to={RoutesConst.HOME}>{<Logo src={dragonImage} alt="" />}</StyledLogin>
                </LogoContainer>
            </StyledMenu>
            <StyledLogin to={RoutesConst.HOME}>
                <StyledTitle>Dragons lending</StyledTitle>
            </StyledLogin>
            <StyledMenu>
                <StyledRules to={RoutesConst.ABOUT}>ABOUT</StyledRules>
                <StyledRules to={RoutesConst.RULES}>RULES</StyledRules>
                <StyledLogin to={RoutesConst.LOGIN}>Login</StyledLogin>
                <StyledRegister to={RoutesConst.REGISTRATION}>Register</StyledRegister>
            </StyledMenu>
        </StyledNavbar>
    );
};
