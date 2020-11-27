import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {colors} from '../../../../styles/theme';

export const StyledContainer = styled.div`
    min-height: 300px;
    width: 100%;
    margin: 5px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

export const StyledButton = styled(Button)`
    background-color: ${colors.green};
    color: white;
`;
