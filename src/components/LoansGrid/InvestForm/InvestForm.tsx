import React from 'react';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {validationSchema} from './InvestForm.helpers';
import {Field, Formik} from 'formik';
import {InputField} from '../../InputField/InputField';
import {Snackbar} from '@material-ui/core';
import {StyledAmount, StyledButton, StyledInvestForm, StyledPercentage} from './InvestForm.styled';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export interface IProps {
    loanAmount: number;
    interestRate: number;
}

export const InvestForm: React.FC<IProps> = ({loanAmount, interestRate}) => {
    const [open, setOpen] = React.useState(false);

    console.log('check', loanAmount, interestRate);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Formik
            initialValues={{investAmount: loanAmount, investRate: interestRate}}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({values, isValid, handleBlur, touched}) => (
                <StyledInvestForm>
                    <StyledAmount>
                        <Field
                            size="small"
                            type="number"
                            label="Amount"
                            name="investAmount"
                            onBlur={handleBlur}
                            prefix="GBP"
                            component={InputField}
                        />
                    </StyledAmount>
                    <StyledPercentage>
                        <Field
                            size="small"
                            type="number"
                            label="%"
                            prefix=""
                            name="investRate"
                            onBlur={handleBlur}
                            component={InputField}
                        />
                    </StyledPercentage>
                    <StyledButton type="submit" variant="contained" color="primary" onClick={handleClick}>
                        Invest
                    </StyledButton>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        {isValid && touched ? (
                            <Alert onClose={handleClose} severity="success">
                                Offer submitted!
                            </Alert>
                        ) : (
                            <Alert onClose={handleClose} severity="error">
                                Incorrect values, please enter a valid number!
                            </Alert>
                        )}
                    </Snackbar>
                    {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                </StyledInvestForm>
            )}
        </Formik>
    );
};
