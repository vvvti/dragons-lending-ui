import React from 'react';
import {ErrorMessage, FormContainer, PageWrapper, StyledButton, StyledForm, StyledInputWrapper} from './CreateAuction.styled';
import {Field, Formik} from 'formik';
import {MARKSDURATION, MARKSINITIAL, MARKSPROFIT} from '../../helpers/marks';
import {AUCTION_VALUES} from '../../helpers/constants';
import {InputField} from '../../components/InputField/InputField';
import {Slider} from '@material-ui/core';
import {validationSchema} from './CreateAuction.helpers';
import {AuctionValues} from '../../helpers/types';
import {CloseButton} from '../../components/CloseButton/CloseButton';
import {usePostAuctions} from '../../hooks/usePostAuctions';
import {Loading} from '../../components/Loading/Loading';

export const CreateAuction: React.FC = () => {
    const {postNewAuction, errorMessage} = usePostAuctions();

    return (
        <PageWrapper>
            <Formik<AuctionValues>
                initialValues={AUCTION_VALUES}
                validationSchema={validationSchema}
                onSubmit={async values => {
                    await postNewAuction(values);
                }}
            >
                {({values, isValid, isSubmitting, setFieldValue, errors, handleBlur, touched}) =>
                    !isSubmitting ? (
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
                                <h2>Auction expiry date:</h2>
                                <StyledInputWrapper>
                                    <Field
                                        type="date"
                                        ariaLabel="Auction expiry date"
                                        name="endDate"
                                        component={InputField}
                                        prefix=""
                                        onBlur={handleBlur}
                                    />
                                    <StyledButton type="submit" variant="contained" color="primary" disabled={!isValid || isSubmitting}>
                                        Create an auction
                                    </StyledButton>
                                    <ErrorMessage> {errorMessage}</ErrorMessage>
                                    <ErrorMessage>{touched.endDate && errors.endDate}</ErrorMessage>
                                </StyledInputWrapper>
                            </FormContainer>
                            {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </StyledForm>
                    ) : (
                        <Loading />
                    )
                }
            </Formik>
        </PageWrapper>
    );
};
