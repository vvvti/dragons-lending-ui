import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';
import {Form} from 'formik';
import {NavLink} from 'react-router-dom';

export const StyledPaper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
    background-color: hsl(339, 100%, 43%);
    margin: 10px 0;
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
    color: hsl(207, 73%, 53%);
`;
export const ErrorMessage = styled.div`
    color: hsl(0, 100%, 50%);
    margin: 5px;
`;

export const StyledText = styled.p`
    font-style: italic;
    font-size: 9px;
`;
