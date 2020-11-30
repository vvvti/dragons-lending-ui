import React, {useState} from 'react';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {validationSchema} from './InvestForm.helpers';
import {Field, Formik} from 'formik';
import {InputField} from '../../InputField/InputField';
import {Snackbar} from '@material-ui/core';
import {StyledAmount, StyledButton, StyledInvestForm, StyledPercentage} from './InvestForm.styled';
import {InvestFormValues} from '../../../helpers/types';
import {useAuthContext} from '../../../context/auth-context';
import {useInvest} from '../../../hooks/useInvest';
import {SERVERSTATUS} from '../../../helpers/constants';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export interface InvestFormProps {
    loanAmount?: number | '';
    interestRate?: number | '';
    auctionId?: string | '';
}

export const InvestForm: React.FC<InvestFormProps> = ({loanAmount, interestRate, auctionId}) => {
    const [open, setOpen] = useState(false);
    const {postInvestValues, serverMessage} = useInvest();
    const {tokenStorage} = useAuthContext();

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Formik<InvestFormValues>
            initialValues={{
                offerAmount: loanAmount || 0,
                interestRate: interestRate || 0,
                auctionId: auctionId || '',
            }}
            validationSchema={validationSchema}
            onSubmit={async values => {
                await postInvestValues(values);
            }}
        >
            {({isValid, handleBlur, isSubmitting}) => (
                <StyledInvestForm>
                    <StyledAmount>
                        <Field
                            ariaLabel="Invest amount"
                            size="small"
                            type="number"
                            label="Amount"
                            name="offerAmount"
                            onBlur={handleBlur}
                            prefix="GBP"
                            component={InputField}
                        />
                    </StyledAmount>
                    <StyledPercentage>
                        <Field
                            ariaLabel="Invest Rate"
                            size="small"
                            type="number"
                            label="%"
                            prefix=""
                            name="interestRate"
                            onBlur={handleBlur}
                            component={InputField}
                        />
                    </StyledPercentage>
                    <StyledButton
                        data-test-id="invest-button"
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        disabled={!tokenStorage || isSubmitting || !isValid}
                    >
                        Invest
                    </StyledButton>
                    <Snackbar
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <div>
                            {serverMessage === SERVERSTATUS.OK && (
                                <Alert onClose={handleClose} severity="success">
                                    Offer submitted!
                                </Alert>
                            )}
                            {serverMessage === SERVERSTATUS.ERROR && (
                                <Alert onClose={handleClose} severity="error">
                                    Something went wrong, please try again
                                </Alert>
                            )}
                        </div>
                    </Snackbar>
                </StyledInvestForm>
            )}
        </Formik>
    );
};
