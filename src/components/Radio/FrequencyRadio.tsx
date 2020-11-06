import {FormControlLabel, Radio} from '@material-ui/core';
import {FieldAttributes, useField} from 'formik';
import React from 'react';

type FrequencyRadioProps = {label: string} & FieldAttributes<{}>;

export const FrequencyRadio: React.FC<FrequencyRadioProps> = ({label, ...props}) => {
    const [field] = useField<{}>(props);
    return <FormControlLabel {...field} control={<Radio />} label={label} />;
};
