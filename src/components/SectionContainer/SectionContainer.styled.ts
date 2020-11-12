import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 20px;
    background-color: hsla(0, 0%, 0%, 0.8);
    color: hsl(0, 0%, 100%);
`;
export const ButtonContainer = styled.div`
    text-align: center;
    margin: 20px;
`;
export const StyledTitle = styled.div`
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
`;
export const StyledExternalLink = styled.a`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
`;
