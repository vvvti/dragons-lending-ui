import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledAvatar, StyledButton, StyledForm, StyledPaper} from './Register.styled';
import {Field, Formik} from 'formik';
import {InputField} from './InputField/InputField';
import {MyCheckbox} from './Checkbox/Checkbox';
import {INITIAL_REGISTER_VALUES} from '../../helpers/constants';
import {validationSchema} from './Register.helpers';
import {Navbar} from '../Navbar/Navbar';

export const Register = () => {
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
                {({values, isValid, isSubmitting, errors}) => (
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
                                    <Grid item xs={12} sm={6}>
                                        <Field label="First Name" name="firstName" component={InputField} autoFocus />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field label="Last Name" name="lastName" component={InputField} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field label="Email Address" name="email" component={InputField} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field label="Password" name="password" type="password" component={InputField} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MyCheckbox name="majority" label="I confirm, I am 18 years of age or older." type="checkbox" />
                                    </Grid>
                                </Grid>
                                <StyledButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={!isValid || !values.majority}
                                >
                                    Register
                                </StyledButton>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
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
