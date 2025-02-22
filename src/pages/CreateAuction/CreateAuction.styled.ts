import {Form} from 'formik';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {colors} from '../../styles/theme';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 30px;
    align-items: center;
    box-shadow: 0 4px 12px ${colors.boxShadow};
`;

export const StyledInputWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(400px, 1fr) 130px;
    grid-column-gap: 100px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 700px;
    width: 100%;
`;

export const ErrorMessage = styled.div`
    color: ${colors.red};
`;

export const CurrencyTitle = styled.h2`
    margin: 0 10px 0 0;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
export const StyledButton = styled(Button)`
    width: 190px;
`;
