import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ErrorMessage, Logo, StyledButton, StyledForm, StyledLogo, StyledPaper, StyledRegisterPage} from './Login.styled';
import {Field, Formik} from 'formik';
import {validationSchema} from './Login.helpers';
import {INITIAL_LOGIN_VALUES} from '../../helpers/constants';
import {NONAUTHROUTES} from '../../helpers/routes';
import {InputField} from '../../components/InputField/InputField';
import {LoginFormValues} from '../../helpers/types';
import {useAuthContext} from '../../context/auth-context';
import dragonLogo from '../../assets/dragon_solo.png';

export const Login: React.FC = () => {
    const {login, loginError} = useAuthContext();

    return (
        <>
            <Formik<LoginFormValues>
                initialValues={INITIAL_LOGIN_VALUES}
                validationSchema={validationSchema}
                onSubmit={(values: LoginFormValues) => {
                    login(values);
                }}
            >
                {({isValid, errors, handleBlur, touched}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledLogo>
                                <Logo src={dragonLogo} alt="" />
                            </StyledLogo>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <ErrorMessage data-test-id="error-message">{loginError}</ErrorMessage>
                            <StyledForm noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="email"
                                            label="Email Address"
                                            name="email"
                                            onBlur={handleBlur}
                                            prefix=""
                                            component={InputField}
                                        />
                                        <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            prefix=""
                                            onBlur={handleBlur}
                                            component={InputField}
                                        />
                                        <ErrorMessage>{touched.password && errors.password}</ErrorMessage>
                                    </Grid>
                                </Grid>
                                <StyledButton
                                    data-test-id="login-button"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={!isValid}
                                >
                                    Login
                                </StyledButton>
                            </StyledForm>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <StyledRegisterPage to={NONAUTHROUTES.REGISTRATION}>Don't have an account? Sign Up</StyledRegisterPage>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
