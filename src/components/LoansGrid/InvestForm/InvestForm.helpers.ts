import * as yup from 'yup';

export const validationSchema = yup.object({
    investAmount: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(0, 'Amount must be 0 or higher')
        .max(1000000, 'You can select max 1 000 000'),
    investRate: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .max(20, 'You can select max 100%')
        .moreThan(0, 'Amount must be 0 or higher'),
});
