import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

export const PageContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatusContainer = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0;
    padding: 0 20px;
    //box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 50px;
    height: 50px;
    margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    font-size: 16px;
`;

export const StyledText = styled.div`
    align-self: center;
    color: hsl(0, 0%, 0%);
`;
