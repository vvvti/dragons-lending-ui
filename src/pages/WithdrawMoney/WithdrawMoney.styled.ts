import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {Form} from 'formik';
import {NavLink} from 'react-router-dom';

export const StyledPaper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: hsl(207, 73%, 53%);
`;
export const StyledText = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;
export const StyledTitle = styled.div`
    font-size: 100px;
    margin: 10px 0;
`;

export const StyledColor = styled.span`
    color: hsl(168, 100%, 44%);
`;
