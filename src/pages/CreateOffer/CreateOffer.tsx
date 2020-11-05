import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import Slider from '@material-ui/core/Slider';
import {
    ErrorMessage,
    FormContainer,
    PageContainer,
    PageWrapper,
    PrefixWrapper,
    RadioGroup,
    StatusContainer,
    StyledForm,
    StyledInput,
    StyledInputWrapper,
    StyledSlider,
    StyledSliderUI,
} from './CreateOffer.styled';
import {Formik} from 'formik';
import {NumberFormatValues} from 'react-number-format';
import {MARKSDURATION, MARKSINITIAL, MARKSMONTHLY, MARKSPROFIT} from '../../helpers/marks';
import {validationSchema} from './CreateOffer.helpers';
import {INITIAL_CREATEOFFER_VALUES} from '../../helpers/constants';
import {FrequencyRadio} from '../../components/Radio/FrequencyRadio';

export const CreateOffer = () => {
    return (
        <PageWrapper>
            <Navbar />
            <PageContainer>
                <StatusContainer>
                    <Formik
                        initialValues={INITIAL_CREATEOFFER_VALUES}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {({values, setFieldValue, errors}) => (
                            <StyledForm>
                                <div>
                                    <FormContainer>
                                        <h2>How much do you have currently saved?</h2>
                                        <StyledInputWrapper>
                                            <StyledSlider>
                                                <StyledSliderUI
                                                    name="slider"
                                                    min={0}
                                                    max={2500}
                                                    step={500}
                                                    valueLabelDisplay="auto"
                                                    marks={MARKSINITIAL}
                                                    value={values.initialValue}
                                                    onChange={(event, value) => setFieldValue('initialValue', value)}
                                                />
                                            </StyledSlider>
                                            <PrefixWrapper>
                                                <StyledInput
                                                    name="initialValue"
                                                    value={values.initialValue}
                                                    thousandSeparator={true}
                                                    allowNegative={false}
                                                    onValueChange={(val: NumberFormatValues) =>
                                                        setFieldValue('initialValue', val.floatValue)
                                                    }
                                                />
                                            </PrefixWrapper>
                                            <ErrorMessage>{errors.initialValue}</ErrorMessage>
                                        </StyledInputWrapper>
                                    </FormContainer>
                                    <FormContainer>
                                        <h2>How much do you want to pay systematically?</h2>
                                        <StyledInputWrapper>
                                            <StyledSlider>
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
                                            </StyledSlider>
                                            <PrefixWrapper>
                                                <StyledInput
                                                    name="monthlySaving"
                                                    value={values.monthlySaving}
                                                    thousandSeparator={true}
                                                    allowNegative={false}
                                                    onValueChange={(val: NumberFormatValues) =>
                                                        setFieldValue('monthlySaving', val.floatValue)
                                                    }
                                                />
                                            </PrefixWrapper>
                                            <ErrorMessage>{errors.monthlySaving}</ErrorMessage>
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
                                            <StyledSlider>
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
                                            </StyledSlider>
                                            <PrefixWrapper>
                                                <StyledInput
                                                    name="savingPeriod"
                                                    value={values.savingPeriod}
                                                    thousandSeparator={true}
                                                    allowNegative={false}
                                                    onValueChange={(val: NumberFormatValues) =>
                                                        setFieldValue('savingPeriod', val.floatValue)
                                                    }
                                                />
                                                Years
                                            </PrefixWrapper>
                                            <ErrorMessage>{errors.savingPeriod}</ErrorMessage>
                                        </StyledInputWrapper>
                                    </FormContainer>
                                    <FormContainer>
                                        <h2>What is your expected annual profit?</h2>
                                        <StyledInputWrapper>
                                            <StyledSlider>
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
                                            </StyledSlider>
                                            <PrefixWrapper>
                                                <StyledInput
                                                    name="annualProfit"
                                                    value={values.annualProfit}
                                                    thousandSeparator={true}
                                                    allowNegative={false}
                                                    onValueChange={(val: NumberFormatValues) =>
                                                        setFieldValue('annualProfit', val.floatValue)
                                                    }
                                                />
                                                %
                                            </PrefixWrapper>
                                            <ErrorMessage>{errors.annualProfit}</ErrorMessage>
                                        </StyledInputWrapper>
                                    </FormContainer>
                                </div>
                            </StyledForm>
                        )}
                    </Formik>
                </StatusContainer>
            </PageContainer>
        </PageWrapper>
    );
};
