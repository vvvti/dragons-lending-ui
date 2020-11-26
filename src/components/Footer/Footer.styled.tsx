import styled from 'styled-components';
import {colors} from '../../styles/theme';
import {NavLink} from 'react-router-dom';

export const StyledFooterContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: auto;
`;

export const StyledFooter = styled.div`
    background-color: ${colors.darkblue};
    width: 100%;
    color: ${colors.dragonOrange};
`;

export const StyledListElement = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: 12px;
    margin-left: -40px;
`;

export const StyledHeader = styled.h6`
    font-size: 12px;
    margin-bottom: 0;
    text-transform: uppercase;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.dragonOrange};
    background-color: ${colors.grayBackground};

    &:hover {
        color: ${colors.red};
    }
`;

export const StyledExternalLink = styled.a`
    text-decoration: none;
    color: ${colors.dragonOrange};
    background-color: ${colors.grayBackground};

    &:hover {
        color: ${colors.red};
    }
`;
