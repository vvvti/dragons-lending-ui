import styled from 'styled-components';
import {colors} from '../../styles/theme';
import {NavLink} from 'react-router-dom';

export const StyledContainer = styled.div`
    margin: 0;
    padding: 1em 2em;
    text-align: center;
    font-size: 1.5em;
    min-height: 75vh;
    background-color: ${colors.subPagesBackground};
    color: white;
`;
export const StyledH1 = styled.h1`
    font-size: 4em;
    color: white;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.dragonOrange};
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 10px;

    &:hover {
        color: ${colors.red};
    }
`;
