import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {colors} from '../../../styles/theme';

export const StyledHeader = styled.div`
    position: absolute;
    padding: 0 10px;
    top: 20px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledButton = styled(Button)`
    font-size: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.gray};
`;
