import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ErrorMessage, Logo, StyledButton, StyledForm, StyledLoginPage, StyledLogo, StyledPaper, StyledText} from './Registration.styled';
import {Field, Formik} from 'formik';
import {InputField} from '../../components/InputField/InputField';
import {INITIAL_REGISTER_VALUES} from '../../helpers/constants';
import {validationSchema} from './Registration.helpers';
import {NONAUTHROUTES} from '../../helpers/routes';
import {DISCLAIMER} from '../../helpers/disclaimer';
import {RegisterFormValues} from '../../helpers/types';
import {useRegister} from '../../hooks/useRegister';
import dragonLogo from '../../assets/dragon_solo.png';

export const Registration: React.FC = () => {
    const {postRegister, registerError} = useRegister();

    return (
        <>
            <Formik<RegisterFormValues>
                initialValues={INITIAL_REGISTER_VALUES}
                validationSchema={validationSchema}
                onSubmit={async (values: RegisterFormValues) => {
                    await postRegister(values);
                }}
            >
                {({isValid, errors, handleBlur, touched}) => (
                    <Container component="main" maxWidth="xs">
                        <StyledPaper>
                            <StyledLogo>
                                <Logo src={dragonLogo} alt="" />
                            </StyledLogo>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <ErrorMessage>{registerError}</ErrorMessage>
                            <StyledForm>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="User name"
                                            label="User Name"
                                            name="username"
                                            component={InputField}
                                            prefix=""
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage>{touched.username && errors.username}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            ariaLabel="First name"
                                            label="First Name"
                                            name="firstName"
                                            component={InputField}
                                            prefix=""
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage>{touched.firstName && errors.firstName}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            ariaLabel="Last name"
                                            label="Last Name"
                                            name="lastName"
                                            onBlur={handleBlur}
                                            prefix=""
                                            component={InputField}
                                        />
                                        <ErrorMessage>{touched.lastName && errors.lastName}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="Email"
                                            label="Email Address"
                                            name="email"
                                            component={InputField}
                                            prefix=""
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            ariaLabel="Password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            component={InputField}
                                            onBlur={handleBlur}
                                            prefix=""
                                        />
                                        <ErrorMessage>{touched.password && errors.password}</ErrorMessage>
                                    </Grid>
                                </Grid>
                                <StyledText>{DISCLAIMER}</StyledText>
                                <StyledButton type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Register
                                </StyledButton>
                            </StyledForm>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <StyledLoginPage to={NONAUTHROUTES.LOGIN}>Already have an account? Sign in</StyledLoginPage>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
