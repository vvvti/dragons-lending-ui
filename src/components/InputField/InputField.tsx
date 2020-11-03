import React from 'react';
import {FieldProps} from 'formik';
import {TextField} from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';

export const InputField: React.FC<FieldProps & TextFieldProps> = ({field, label, type, autoFocus}) => {
    return <TextField variant="outlined" type={type} required label={label} fullWidth autoFocus={autoFocus} {...field} />;
};
