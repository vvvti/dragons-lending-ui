import {Form} from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 50px;
    align-items: center;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
`;

export const RadioGroup = styled.div`
    display: flex;
`;

export const StyledInputWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 150px;
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
    color: hsl(0, 100%, 50%);
`;

export const CurrencyTitle = styled.h2`
    margin: 0 10px 0 0;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
