import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledButton, StyledColor, StyledForm, StyledPaper, StyledText, StyledTitle} from './Deposit.styled';
import {Field, Formik} from 'formik';
import {InputField} from '../../components/InputField/InputField';
import {validationSchema} from './Deposit.helpers';
import {ErrorMessage} from '../Login/Login.styled';
import {INITIAL_DEPOSIT_VALUES} from '../../helpers/constants';
import {useAccountBalance} from '../../hooks/useAccountBalance';
import {DepositAmount} from '../../helpers/types';
import {useToPage} from '../../hooks/useToPage';

export const Deposit: React.FC = () => {
    const {postDepositAmount} = useAccountBalance();
    const {goToUserAccount} = useToPage();

    return (
        <>
            <Formik
                initialValues={INITIAL_DEPOSIT_VALUES}
                validationSchema={validationSchema}
                onSubmit={async (values: DepositAmount) => {
                    await postDepositAmount(values);
                    goToUserAccount();
                }}
            >
                {({values, isValid, handleBlur, touched, errors}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledTitle>
                                Hargreaves <StyledColor>Lansdown</StyledColor>
                            </StyledTitle>
                            <Typography component="h1" variant="h5">
                                Deposit Money
                            </Typography>

                            <StyledForm noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <StyledText>From Account</StyledText>
                                        <Field
                                            ariaLabel="account"
                                            label="Account ID"
                                            name="fromAccountNumber"
                                            autoFocus
                                            onBlur={handleBlur}
                                            prefix=""
                                            component={InputField}
                                        />
                                        <ErrorMessage>{touched.fromAccountNumber && errors.fromAccountNumber}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledText>Amount</StyledText>
                                        <Field
                                            ariaLabel="amount"
                                            label="GBP"
                                            name="amount"
                                            type="number"
                                            prefix=""
                                            onBlur={handleBlur}
                                            component={InputField}
                                        />
                                        <ErrorMessage>{touched.amount && errors.amount}</ErrorMessage>
                                    </Grid>
                                </Grid>
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Add to your account
                                </StyledButton>
                            </StyledForm>
                            {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
