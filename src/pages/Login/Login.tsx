import React from 'react';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ErrorMessage, StyledAvatar, StyledButton, StyledForm, StyledPaper, StyledRegisterPage} from './Login.styled';
import {Field, Formik} from 'formik';
import {validationSchema} from './Login.helpers';
import {INITIAL_LOGIN_VALUES} from '../../helpers/constants';
import {ROUTES} from '../../helpers/routes';
import {InputField} from '../../components/InputField/InputField';
import {LoginFormValues} from '../../helpers/types';
import {CloseButton} from '../../components/CloseButton/CloseButton';

export const Login: React.FC = () => {
    return (
        <>
            <Formik<LoginFormValues>
                initialValues={INITIAL_LOGIN_VALUES}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({isValid, errors, handleBlur, touched}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <CloseButton />
                            <StyledAvatar color="primary">
                                <LockOutlinedIcon />
                            </StyledAvatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
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
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Login
                                </StyledButton>
                            </StyledForm>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <StyledRegisterPage to={ROUTES.REGISTRATION}>Don't have an account? Sign Up</StyledRegisterPage>
                                </Grid>
                            </Grid>
                            {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
