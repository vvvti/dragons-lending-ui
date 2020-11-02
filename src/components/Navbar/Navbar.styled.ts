import styled from 'styled-components';

export const StyledNavbar = styled.div`
    display: flex;
    flex-basis: 100px;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    background-color: hsl(240, 2%, 16%);
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: hsl(240, 2%, 16%);
    color: white;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
`;

export const StyledMenu = styled.div`
    grid-area: menu;
    flex-basis: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    background-color: hsl(240, 2%, 16%);
`;

export const StyledLogin = styled.div`
    margin: 20px;
    font-size: 16px;
`;

export const StyledSingUp = styled.div`
    margin: 20px 20px 20px 0;
    font-size: 16px;
    color: hsl(0, 100%, 50%);
`;

export const Logo = styled.img`
    height: 90px;
`;
