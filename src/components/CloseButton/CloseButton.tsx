import React from 'react';
import {StyledButton} from './CloseButton.styled';
import {useBack} from '../../hooks/useBack';

export const CloseButton = () => {
    const {goBack} = useBack();

    return <StyledButton onClick={goBack}>X</StyledButton>;
};
