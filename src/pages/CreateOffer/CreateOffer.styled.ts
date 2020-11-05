import {Form} from 'formik';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import {colors, defaultBorderRadius} from '../../styles/theme';
import Slider from '@material-ui/core/Slider';

export const StyledSliderUI = styled(Slider)`
    color: #008000;
`;

export const StyledForm = styled(Form)`
    display: flex;
    margin: 50px auto;
    padding: 50px 100px;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    max-width: 85%;
    min-width: 1000px;
    background-color: ${colors.backgroundContainer};
    color: ${colors.fontColor};
    border-radius: ${defaultBorderRadius};
    box-shadow: 0 0 10px 1px ${colors.boxShadow};
`;

export const RadioGroup = styled.div`
    display: flex;
`;

export const StyledInputWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 40px 15px;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 500px;
`;

export const StyledSlider = styled.div`
    width: 300px;
`;

export const ErrorMessage = styled.div`
    color: red;
`;

export const PrefixWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CurrencyTitle = styled.h2`
    margin: 0 10px 0 0;
`;

export const StyledInput = styled(NumberFormat)`
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 8px;
    margin: 0 10px;
    border: 1px solid ${colors.inputBorder};
    width: 80px;
`;

export const PageContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatusContainer = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
