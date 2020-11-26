import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';
import {Form} from 'formik';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme';

export const StyledPaper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 59vh;
`;

export const StyledAvatar = styled(Avatar)`
    background-color: ${colors.redBackground};
    margin: 10px 0;
`;

export const StyledForm = styled(Form)`
    margin-top: 20px;
    width: 100%;
`;
export const StyledButton = styled(Button)`
    margin: 20px 0;
`;
export const StyledRegisterPage = styled(NavLink)`
    text-decoration: none;
    margin: 20px;
    color: ${colors.blue};
`;
export const StyledText = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;
export const StyledTitle = styled.div`
    font-size: 32px;
    margin: 10px 0;
    font-weight: 900;
`;

export const StyledColor = styled.span`
    color: ${colors.marine};
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

export const StyledErrorMessage = styled.span`
    color: ${colors.red};
`;
