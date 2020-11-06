import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import {ErrorMessage, FormContainer, PageWrapper, StyledButton, StyledForm, StyledInputWrapper} from './CreateOffer.styled';
import {Field, Formik} from 'formik';
import {MARKSDURATION, MARKSINITIAL, MARKSPROFIT} from '../../helpers/marks';
import {INITIAL_CREATEOFFER_VALUES} from '../../helpers/constants';
import {InputField} from '../../components/InputField/InputField';
import {Slider} from '@material-ui/core';
import {validationSchema} from './CreateOffer.helpers';

export const CreateOffer = () => {
    return (
        <PageWrapper>
            <Navbar />
            <Formik
                initialValues={INITIAL_CREATEOFFER_VALUES}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({values, isValid, setFieldValue, errors, handleBlur, touched}) => (
                    <StyledForm>
                        <FormContainer>
                            <h2>How much do you want to borrow?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={100}
                                    max={2500}
                                    step={500}
                                    valueLabelDisplay="auto"
                                    marks={MARKSINITIAL}
                                    value={values.loanAmount}
                                    onChange={(event, value) => setFieldValue('loanAmount', value)}
                                />
                                <Field
                                    type="number"
                                    label="Borrow"
                                    name="loanAmount"
                                    component={InputField}
                                    onBlur={handleBlur}
                                    prefix="GBP"
                                />
                                <ErrorMessage>{touched.loanAmount && errors.loanAmount}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>For how long?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={1}
                                    max={36}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks={MARKSDURATION}
                                    value={values.timePeriod}
                                    onChange={(event, value) => setFieldValue('timePeriod', value)}
                                />
                                <Field
                                    type="number"
                                    label="Period"
                                    name="timePeriod"
                                    component={InputField}
                                    onBlur={handleBlur}
                                    prefix="months"
                                />
                                <ErrorMessage>{touched.timePeriod && errors.timePeriod}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        {/*<FormContainer>*/}
                        {/*    <h2>Payment frequency:</h2>*/}
                        {/*    <StyledInputWrapper>*/}
                        {/*        <RadioGroup>*/}
                        {/*            <FrequencyRadio name="paymentFrequency" type="radio" value="monthly"*/}
                        {/*                            label="monthly"/>*/}
                        {/*            <FrequencyRadio name="paymentFrequency" type="radio" value="onetime"*/}
                        {/*                            label="one-time payment"/>*/}
                        {/*        </RadioGroup>*/}
                        {/*    </StyledInputWrapper>*/}
                        {/*</FormContainer>*/}
                        <FormContainer>
                            <h2>Interest rate:</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={1}
                                    max={10}
                                    step={0.1}
                                    valueLabelDisplay="auto"
                                    marks={MARKSPROFIT}
                                    value={values.interestRate}
                                    onChange={(event, value) => setFieldValue('interestRate', value)}
                                />
                                <Field
                                    type="number"
                                    label="Interests"
                                    name="interestRate"
                                    component={InputField}
                                    onBlur={handleBlur}
                                    prefix="%"
                                />
                                <ErrorMessage>{touched.interestRate && errors.interestRate}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>Offer expiry date:</h2>
                            <StyledInputWrapper>
                                <Field type="date" name="endDate" component={InputField} onBlur={handleBlur} />
                                <StyledButton type="submit" size="small" fullWidth variant="contained" color="primary" disabled={!isValid}>
                                    Create Offer
                                </StyledButton>
                                <ErrorMessage>{touched.endDate && errors.endDate}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                    </StyledForm>
                )}
            </Formik>
        </PageWrapper>
    );
};
