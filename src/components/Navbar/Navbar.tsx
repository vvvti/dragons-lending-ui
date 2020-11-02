import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledLogin, StyledMenu, StyledNavbar, StyledSingUp, StyledTitle} from './Navbar.styled';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                <Logo src={dragonImage} alt="" />
            </StyledMenu>
            <StyledTitle>Dragons lending</StyledTitle>
            <StyledMenu>
                <StyledLogin>Sign in</StyledLogin>
                <StyledSingUp>Sign up</StyledSingUp>
            </StyledMenu>
        </StyledNavbar>
    );
};
