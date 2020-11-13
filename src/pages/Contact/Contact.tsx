import React from 'react';
import {StyledContact, StyledH4, StyledMan, ContactItem} from './Contact.styled';
import man from '../../assets/man.png';

export const Contact: React.FC = () => {
    return (
        <StyledContact>
            <StyledMan src={man} alt="Calculator" />
            <ContactItem>
                <StyledH4>Contact Customer Support:</StyledH4>
                <p>fintech@challenge.com</p>
                <StyledH4>Talk to us:</StyledH4>
                <p>(+44) 7911-123-456</p>
            </ContactItem>
        </StyledContact>
    );
};
