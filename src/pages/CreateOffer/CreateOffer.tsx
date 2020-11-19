import React from 'react';
import {ErrorMessage, FormContainer, PageWrapper, StyledButton, StyledForm, StyledInputWrapper} from './CreateOffer.styled';
import {Field, Formik} from 'formik';
import {MARKSDURATION, MARKSINITIAL, MARKSPROFIT} from '../../helpers/marks';
import {OFFER_VALUES} from '../../helpers/constants';
import {InputField} from '../../components/InputField/InputField';
import {Slider} from '@material-ui/core';
import {validationSchema} from './CreateOffer.helpers';
import {OfferValues} from '../../helpers/types';
import {CloseButton} from '../../components/CloseButton/CloseButton';
import {useOffer} from '../../hooks/useOffer';

export const CreateOffer: React.FC = () => {
    const {postNewOffer} = useOffer();

    return (
        <PageWrapper>
            <Formik<OfferValues>
                initialValues={OFFER_VALUES}
                validationSchema={validationSchema}
                onSubmit={async values => {
                    await postNewOffer(values);
                }}
            >
                {({values, isValid, setFieldValue, errors, handleBlur, touched}) => (
                    <StyledForm>
                        <CloseButton />
                        <FormContainer>
                            <h2>How much do you want to borrow?</h2>
                            <StyledInputWrapper>
                                <Slider
                                    name="slider"
                                    min={100}
                                    max={2500}
                                    step={100}
                                    valueLabelDisplay="auto"
                                    marks={MARKSINITIAL}
                                    value={Number(values.loanAmount)}
                                    onChange={(event, value) => setFieldValue('loanAmount', value)}
                                />
                                <Field
                                    type="number"
                                    ariaLabel="Borrow"
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
                                    value={Number(values.timePeriod)}
                                    onChange={(event, value) => setFieldValue('timePeriod', value)}
                                />
                                <Field
                                    type="number"
                                    ariaLabel="Period"
                                    label="Period"
                                    name="timePeriod"
                                    component={InputField}
                                    onBlur={handleBlur}
                                    prefix="months"
                                />
                                <ErrorMessage>{touched.timePeriod && errors.timePeriod}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
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
                                    value={Number(values.interestRate)}
                                    onChange={(event, value) => setFieldValue('interestRate', value)}
                                />
                                <Field
                                    type="number"
                                    ariaLabel="Interests"
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
                                <Field
                                    type="date"
                                    ariaLabel="Offer expiry date"
                                    name="endDate"
                                    component={InputField}
                                    prefix=""
                                    onBlur={handleBlur}
                                />
                                <StyledButton type="submit" size="small" variant="contained" color="primary" disabled={!isValid}>
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
