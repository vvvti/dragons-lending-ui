import * as yup from 'yup';

export const validationSchema = yup.object({
    loanAmount: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(0, 'Amount must be 0 or higher')
        .max(1000000, 'You can select max 1 000 000'),
    timePeriod: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(0, 'Amount must be 0 or higher')
        .max(36, 'You can select max 36 months'),
    interestRate: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .max(100, 'You can select max 100%')
        .moreThan(0, 'Amount must be 0 or higher'),
    endDate: yup.date().min(new Date(), 'Date must be later than today.'),
});
