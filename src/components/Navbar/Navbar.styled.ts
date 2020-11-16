import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Avatar} from '@material-ui/core';

const activeClassName = 'active';

export const StyledNavbar = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: hsl(240, 2%, 16%);
`;

export const StyledTitle = styled(NavLink)`
    display: flex;
    flex-grow: 1;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    background-color: hsl(240, 2%, 16%);
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
    text-align: center;
    font-size: 46px;
    font-weight: bold;

    @media (max-width: 1200px) {
        font-size: 24px;
    }
`;

export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
    background-color: hsl(240, 2%, 16%);
    padding: 0 40px 0 20px;
`;

export const Logo = styled.img`
    height: 50px;
    margin: 0 20px 0 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 16px;
    margin: 20px 10px;
    background-color: hsl(240, 2%, 16%);
    text-transform: uppercase;

    &:hover {
        color: hsl(0, 100%, 50%);
    }

    &.${activeClassName} {
        color: hsl(0, 100%, 50%);
    }
`;

export const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    background-color: hsl(240, 2%, 16%);
    font-size: 16px;
    border: none;
    outline: none;
    margin: 0;
`;

export const StyledText = styled.span`
    background-color: hsl(240, 2%, 16%);
    color: hsl(0, 0%, 100%);
    text-transform: uppercase;
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 2em;
    height: 2em;
    margin-left: 20px;
`;
