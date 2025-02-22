import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {Form} from 'formik';
import {NavLink} from 'react-router-dom';
import {colors} from '../../styles/theme';

export const StyledPaper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 64vh;
`;

export const StyledLogo = styled.div`
    margin: 10px 0;
`;

export const Logo = styled.img`
    height: 70px;
`;

export const StyledForm = styled(Form)`
    margin-top: 20px;
    width: 100%;
`;
export const StyledButton = styled(Button)`
    margin: 20px 0;
`;
export const StyledLoginPage = styled(NavLink)`
    text-decoration: none;
    margin: 20px;
    color: ${colors.blue};
`;
export const ErrorMessage = styled.div`
    color: ${colors.red};
    margin: 5px;
`;

export const StyledText = styled.p`
    font-style: italic;
    font-size: 9px;
`;
