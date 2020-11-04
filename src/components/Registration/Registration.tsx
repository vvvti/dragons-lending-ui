import React from 'react';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ErrorMessage, StyledAvatar, StyledButton, StyledForm, StyledLoginPage, StyledPaper} from './Registrationstyled';
import {Field, Formik} from 'formik';
import {InputField} from '../InputField/InputField';
import {INITIAL_REGISTER_VALUES} from '../../helpers/constants';
import {validationSchema} from './Registration.helpers';
import {Navbar} from '../Navbar/Navbar';
import {ROUTES} from '../../helpers/routes';

export const Registration = () => {
    return (
        <>
            <Navbar />
            <Formik
                initialValues={INITIAL_REGISTER_VALUES}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({isValid, errors, handleBlur, touched}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledAvatar color="primary">
                                <LockOutlinedIcon />
                            </StyledAvatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <StyledForm noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field label="User Name" name="username" component={InputField} onBlur={handleBlur} autoFocus />
                                        <ErrorMessage>{touched.username && errors.username}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field label="First Name" name="firstName" component={InputField} onBlur={handleBlur} />
                                        <ErrorMessage>{touched.firstName && errors.firstName}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field label="Last Name" name="lastName" onBlur={handleBlur} component={InputField} />
                                        <ErrorMessage>{touched.lastName && errors.lastName}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field label="Email Address" name="email" component={InputField} onBlur={handleBlur} />
                                        <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            label="Password"
                                            name="password"
                                            type="password"
                                            component={InputField}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage>{touched.password && errors.password}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field label="Personal Id" name="personalId" component={InputField} onBlur={handleBlur} />
                                        <ErrorMessage>{touched.personalId && errors.personalId}</ErrorMessage>
                                    </Grid>
                                </Grid>
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Register
                                </StyledButton>
                            </StyledForm>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <StyledLoginPage to={ROUTES.LOGIN}>Already have an account? Sign in</StyledLoginPage>
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
