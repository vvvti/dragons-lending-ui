import * as yup from 'yup';

export const validationSchema = yup.object({
    offerAmount: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(0, 'Amount must be 0 or higher')
        .max(10000, 'You can select max 10 000'),
    interestRate: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .max(20, 'You can select max 20%')
        .moreThan(0, 'Amount must be 0 or higher'),
});
