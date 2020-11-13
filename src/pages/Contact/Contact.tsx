import React from 'react';
import {StyledContact, StyledH4} from './Contact.styled';

export const Contact: React.FC = () => {
    return (
        <StyledContact>
            <StyledH4>Contact Customer Support:</StyledH4>
            <p>fintech@challenge.com</p>
            <StyledH4>Talk to us:</StyledH4>
            <p>(+44) 7911-123-456</p>
        </StyledContact>
    );
};
