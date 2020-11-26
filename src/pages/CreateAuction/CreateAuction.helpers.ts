import * as yup from 'yup';

export const validationSchema = yup.object({
    loanAmount: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(0, 'Amount must be 0 or higher')
        .max(10000, 'You can select max 10 000'),
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
        .max(20, 'You can select max 20%')
        .moreThan(0, 'Amount must be 0 or higher'),
    endDate: yup.date().min(new Date(), 'Date must be later than today.'),
});
