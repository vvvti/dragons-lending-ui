import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import {colors} from '../../styles/theme';

const activeClassName = 'active';

export const StyledNavbar = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: ${colors.grayBackground};
`;

export const StyledTitle = styled(NavLink)`
    display: flex;
    flex-grow: 1;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    background-color: ${colors.grayBackground};
    color: ${colors.white};
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
    color: ${colors.dragonOrange};
    text-transform: uppercase;
    background-color: ${colors.grayBackground};
    padding: 0 0 0 20px;
`;

export const Logo = styled.img`
    height: 70px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${colors.dragonOrange};
    font-size: 16px;
    margin: 20px 10px;
    background-color: ${colors.grayBackground};
    text-transform: uppercase;

    &:hover {
        color: ${colors.red};
    }

    &.${activeClassName} {
        color: ${colors.red};
    }
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 2em;
    height: 2em;
    margin-left: 20px;
    color: ${colors.dragonRed};
    background-color: ${colors.dragonOrange};
`;

export const StyledAccount = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${colors.dragonOrange};
    font-size: 16px;
    margin: 20px 0;
    background-color: ${colors.grayBackground};
    text-transform: uppercase;

    &:hover {
        color: ${colors.dragonRed};
    }

    &.${activeClassName} {
        color: ${colors.dragonRed};
    }
`;
