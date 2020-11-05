import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';

import {ErrorMessage, FormContainer, PageWrapper, RadioGroup, StyledForm, StyledInputWrapper} from './CreateOffer.styled';
import {Field, Formik} from 'formik';
import {MARKSDURATION, MARKSINITIAL, MARKSMONTHLY, MARKSPROFIT} from '../../helpers/marks';
import {validationSchema} from './CreateOffer.helpers';
import {INITIAL_CREATEOFFER_VALUES} from '../../helpers/constants';
import {FrequencyRadio} from '../../components/Radio/FrequencyRadio';
import {InputField} from '../../components/InputField/InputField';
import {Slider} from '@material-ui/core';

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
                {({values, setFieldValue, errors, handleBlur, touched}) => (
                    <StyledForm>
                        <FormContainer>
                            <h2>How much do you have currently saved?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={0}
                                    max={2500}
                                    step={500}
                                    valueLabelDisplay="auto"
                                    marks={MARKSINITIAL}
                                    value={values.initialValue}
                                    onChange={(event, value) => setFieldValue('initialValue', value)}
                                />
                                <Field type="number" label="initialValue" name="initialValue" component={InputField} onBlur={handleBlur} />
                                <ErrorMessage>{touched.initialValue && errors.initialValue}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How much do you want to pay systematically?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={0}
                                    max={600}
                                    step={100}
                                    valueLabelDisplay="auto"
                                    marks={MARKSMONTHLY}
                                    value={values.monthlySaving}
                                    onChange={(event, value) => setFieldValue('monthlySaving', value)}
                                />
                                <Field
                                    type="number"
                                    label="monthlySaving"
                                    name="monthlySaving"
                                    component={InputField}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage>{touched.monthlySaving && errors.monthlySaving}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>Payment frequency:</h2>
                            <StyledInputWrapper>
                                <RadioGroup>
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="12" label="month" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="4" label="quarter" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="2" label="half-year" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="1" label="year" />
                                </RadioGroup>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How long do you plan to invest?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={0}
                                    max={12}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks={MARKSDURATION}
                                    value={values.savingPeriod}
                                    onChange={(event, value) => setFieldValue('savingPeriod', value)}
                                />
                                <Field type="number" label="savingPeriod" name="savingPeriod" component={InputField} onBlur={handleBlur} />
                                <ErrorMessage>{touched.savingPeriod && errors.savingPeriod}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>What is your expected annual profit?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={0}
                                    max={10}
                                    step={0.1}
                                    valueLabelDisplay="auto"
                                    marks={MARKSPROFIT}
                                    value={values.annualProfit}
                                    onChange={(event, value) => setFieldValue('annualProfit', value)}
                                />
                                <Field type="number" label="annualProfit" name="annualProfit" component={InputField} onBlur={handleBlur} />
                                <ErrorMessage>{touched.annualProfit && errors.annualProfit}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                    </StyledForm>
                )}
            </Formik>
        </PageWrapper>
    );
};
