import React from 'react';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledAvatar, StyledButton, StyledForm, StyledPaper, StyledRegisterPage} from './Login.styled';
import {Field, Formik} from 'formik';
import {InputField} from './InputField/InputField';
import {validationSchema} from './Login.helpers';
import {Navbar} from '../Navbar/Navbar';
import {INITIAL_LOGIN_VALUES} from '../../helpers/constants';
import {ROUTES} from '../../helpers/routes';

export const Login = () => {
    return (
        <>
            <Navbar />
            <Formik
                initialValues={INITIAL_LOGIN_VALUES}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({isValid}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledAvatar color="primary">
                                <LockOutlinedIcon />
                            </StyledAvatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <StyledForm noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field label="Email Address" name="email" component={InputField} autoFocus />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field label="Password" name="password" type="password" component={InputField} />
                                    </Grid>
                                </Grid>
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Login
                                </StyledButton>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <StyledRegisterPage to={ROUTES.REGISTER}>Don't have an account? Sign Up</StyledRegisterPage>
                                    </Grid>
                                </Grid>
                                {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                            </StyledForm>
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
