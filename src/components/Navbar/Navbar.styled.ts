import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

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
    flex-basis: 400px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    background-color: hsl(240, 2%, 16%);
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 46px;
    font-weight: bold;

    @media (max-width: 1300px) {
        font-size: 24px;
    }
`;

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    background-color: hsl(240, 2%, 16%);
    margin-right: 100px;
`;

export const StyledLogo = styled.div`
    height: 100%;
    margin: 0 150px;
`;

export const Logo = styled.img`
    height: 100%;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 16px;
    margin: 20px 10px;

    &.${activeClassName} {
        color: hsl(0, 100%, 50%);
    }
`;
