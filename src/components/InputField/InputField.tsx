import React from 'react';
import {FieldProps} from 'formik';
import {InputAdornment, TextField} from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';

export interface InputFieldProps {
    prefix?: string;
    size?: string;
}

export const InputField: React.FC<FieldProps & TextFieldProps & InputFieldProps> = ({size, prefix, field, label, type, autoFocus}) => {
    return (
        <TextField
            variant="outlined"
            type={type}
            required
            label={label}
            size={size}
            fullWidth
            autoFocus={autoFocus}
            InputProps={{
                endAdornment: <InputAdornment position="end">{prefix}</InputAdornment>,
            }}
            {...field}
        />
    );
};
