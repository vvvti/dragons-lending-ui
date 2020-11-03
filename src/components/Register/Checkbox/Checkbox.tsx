import React from 'react';
import {FieldAttributes, useField} from 'formik';
import {FormControlLabel} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

type MyCheckboxProps = {label: string} & FieldAttributes<{}>;

export const MyCheckbox: React.FC<MyCheckboxProps> = ({label, ...props}) => {
    const [field] = useField<{}>(props);
    return (
        <FormControlLabel
            {...field}
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I confirm, I am 18 years of age or older."
        />
    );
};
