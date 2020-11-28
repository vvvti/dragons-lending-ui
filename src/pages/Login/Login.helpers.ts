import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup
        .string()
        .email()
        .typeError('Value must be a your email')
        .required(),
    password: yup
        .string()
        .typeError('Value must be a your password')
        .min(8, 'Password should contain at last 8 character')
        .required(),
});
