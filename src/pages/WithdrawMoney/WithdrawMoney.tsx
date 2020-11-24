import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledButton, StyledForm, StyledPaper, StyledText, StyledTextField} from './WithdrawMoney.styled';
import {Field, Formik} from 'formik';
import {InputField} from '../../components/InputField/InputField';
import {INITIAL_WITHDRAW_VALUES} from '../../helpers/constants';
import {validationSchema} from './WithdrawMoney.helpers';
import {ErrorMessage} from '../Login/Login.styled';
import withdraw from '../../assets/withdrawal.png';
import {useAccountBalance} from '../../hooks/useAccountBalance';
import {WithdrawnAmount} from '../../helpers/types';
import {useToPage} from '../../hooks/useToPage';

export const WithdrawMoney: React.FC = () => {
    const {withdrawAmount, postWithdrawAmount} = useAccountBalance();
    const {goToUserAccount} = useToPage();

    console.log('withdrawAmount up', withdrawAmount);

    const accountNumber = 'GB 00';

    return (
        <>
            <Formik
                initialValues={INITIAL_WITHDRAW_VALUES}
                validationSchema={validationSchema}
                onSubmit={async (values: WithdrawnAmount) => {
                    await postWithdrawAmount(values);
                    goToUserAccount();
                }}
            >
                {({values, isValid, handleBlur, touched, errors}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <img src={withdraw} alt="withdraw" />
                            <Typography component="h1" variant="h5">
                                Withdraw Money
                            </Typography>

                            <StyledForm noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <StyledText>To Account</StyledText>
                                        <StyledTextField
                                            id="outlined-basic"
                                            label="Account number*"
                                            variant="outlined"
                                            value={accountNumber}
                                        />
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
                                    Execute
                                </StyledButton>
                            </StyledForm>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
