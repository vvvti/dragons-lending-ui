import React from 'react';
import {StyledExternalLink, StyledFooter, StyledFooterContainer, StyledHeader, StyledListElement, StyledNavLink} from './Footer.styled';
import {NONAUTHROUTES} from '../../helpers/routes';
import {CALCULATORPAGE, FACEBOOK, LINKEDIN, TWITTER} from '../../helpers/constants';

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>
                <div>
                    <StyledHeader>dragons lending</StyledHeader>
                    <ul>
                        <StyledNavLink to={NONAUTHROUTES.RULES}>
                            <StyledListElement>Rules</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={NONAUTHROUTES.PRIVACY}>
                            <StyledListElement>Privacy</StyledListElement>
                        </StyledNavLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Company</StyledHeader>
                    <ul>
                        <StyledNavLink to={NONAUTHROUTES.HOME}>
                            <StyledListElement>Home</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={NONAUTHROUTES.ABOUT}>
                            <StyledListElement>About</StyledListElement>
                        </StyledNavLink>
                        <StyledNavLink to={NONAUTHROUTES.CONTACT}>
                            <StyledListElement>Contact</StyledListElement>
                        </StyledNavLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Invest</StyledHeader>
                    <ul>
                        <StyledNavLink to={NONAUTHROUTES.OFFERSGRID}>
                            <StyledListElement>Social Lending</StyledListElement>
                        </StyledNavLink>
                        <StyledExternalLink href={CALCULATORPAGE}>
                            <StyledListElement>Calculator</StyledListElement>
                        </StyledExternalLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Support</StyledHeader>
                    <ul>
                        <StyledListElement>support@dragons-lending.com</StyledListElement>
                        <StyledListElement>+44 0123 872 199</StyledListElement>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Follow Dragons</StyledHeader>
                    <ul>
                        <StyledExternalLink href={FACEBOOK}>
                            <StyledListElement>Facebook</StyledListElement>
                        </StyledExternalLink>
                        <StyledExternalLink href={TWITTER}>
                            <StyledListElement>Twitter</StyledListElement>
                        </StyledExternalLink>
                        <StyledExternalLink href={LINKEDIN}>
                            <StyledListElement>LinkedIn</StyledListElement>
                        </StyledExternalLink>
                    </ul>
                </div>
                <div>
                    <StyledHeader>Dragons Office</StyledHeader>
                    <ul>
                        <StyledListElement>Downing Street 10</StyledListElement>
                        <StyledListElement>London</StyledListElement>
                        <StyledListElement>United Kingdom</StyledListElement>
                    </ul>
                </div>
            </StyledFooterContainer>
        </StyledFooter>
    );
};
