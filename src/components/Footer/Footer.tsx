import React from 'react';
import {StyledFooter} from './Footer.styled';
import {StyledListElement} from './Footer.styled';

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div>
                <h4>DRAGONS</h4>
                <h6>LENDING</h6>
            </div>
            <div>
                <h6>Company</h6>
                <ul>
                    <StyledListElement>Home</StyledListElement>
                    <StyledListElement>About</StyledListElement>
                    <StyledListElement>Rules</StyledListElement>
                    <StyledListElement>Privacy</StyledListElement>
                    <StyledListElement>Contact</StyledListElement>
                </ul>
            </div>
            <div>
                <h6>Invest</h6>
                <ul>
                    <StyledListElement>Social Lending</StyledListElement>
                    <StyledListElement>Calculator</StyledListElement>
                </ul>
            </div>
            <div>
                <h6>Follow Dragons</h6>
                <ul>
                    <StyledListElement>Facebook</StyledListElement>
                    <StyledListElement>Twitter</StyledListElement>
                    <StyledListElement>LinkedIn</StyledListElement>
                </ul>
            </div>
            <div>
                <h6>Dragons Office</h6>
                <ul>
                    <StyledListElement>Downing Street 10</StyledListElement>
                    <StyledListElement>London</StyledListElement>
                    <StyledListElement>United Kingdom</StyledListElement>
                </ul>
            </div>
        </StyledFooter>
    );
};
