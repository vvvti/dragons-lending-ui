import React from 'react';
import {StyledContact, StyledH4, StyledMan, ContactItem, StyledContainer} from './Contact.styled';
import man from '../../assets/man.png';

export const Contact: React.FC = () => {
    return (
        <StyledContainer>
            <StyledContact>
                <StyledMan src={man} alt="Calculator" />
                <ContactItem>
                    <StyledH4>Contact Customer Support:</StyledH4>
                    <p>support@dragons-lending.com</p>
                    <StyledH4>Talk to us:</StyledH4>
                    <p>+44 0123 872 199</p>
                </ContactItem>
            </StyledContact>
        </StyledContainer>
    );
};
