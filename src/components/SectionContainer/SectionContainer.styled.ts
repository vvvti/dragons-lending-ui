import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme';
import {Button} from '@material-ui/core';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 20px;
    background-color: ${colors.transparentBackground};
    color: ${colors.white};
`;
export const ButtonContainer = styled.div`
    text-align: center;
    margin: 20px;
`;
export const StyledTitle = styled.div`
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.dragonOrange};
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.white};
`;
export const StyledExternalLink = styled.a`
    text-decoration: none;
    color: ${colors.white};
`;

export const StyledButton = styled(Button)`
    background-color: ${colors.dragonRed};
    color: white;
`;
