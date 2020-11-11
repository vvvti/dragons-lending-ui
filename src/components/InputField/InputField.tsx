import React from 'react';
import {FieldProps} from 'formik';
import {InputAdornment, TextField} from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';

export interface InputFieldProps {
    prefix?: string;
    size?: string;
    ariaLabel?: string;
}

export const InputField: React.FC<FieldProps & TextFieldProps & InputFieldProps> = ({
    ariaLabel,
    size,
    prefix,
    field,
    label,
    type,
    autoFocus,
}) => {
    return (
        <TextField
            id={field.name}
            variant="outlined"
            type={type}
            required
            label={label}
            size={size}
            fullWidth
            autoFocus={autoFocus}
            InputProps={{
                inputProps: {
                    // eslint-disable-next-line no-useless-computed-key
                    ['aria-label']: ariaLabel,
                },
                endAdornment: <InputAdornment position="end">{prefix}</InputAdornment>,
            }}
            {...field}
        />
    );
};
