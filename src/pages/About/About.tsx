import React from 'react';
import {StyledAbout, StyledHeader, StyledParagraph, StyledWishes, StyledContainer} from './About.styled';

export const About: React.FC = () => {
    return (
        <StyledContainer>
            <StyledAbout>
                <StyledHeader>About Draco Social Landing Platform</StyledHeader>
                <StyledParagraph>
                    Draco Social Lending is a project introducing the idea of ​​"social lending" to the Polish market. Simply put, our
                    service allows for granting loans between individuals without the inter mediation of banks - offering customers speed,
                    simplicity and convenience. We believe that such projects are the future of banking. From the very beginning, banks have
                    linked people who have money (through deposits and other investment products of this type) with those who need it (by
                    providing loans). It is only in recent years, with the development of the Internet and mobile phones, that this status
                    quo may change for the first time. In order to connect people who need money with those who have it, you no longer need
                    a bank - it is enough to use modern technologies, i.e. websites and applications for mobile phones. This is an analogous
                    situation to the changes that have taken place in trade - bazaars and shops have partially replaced auction sites and
                    online stores. The lack of "physicality" in both commerce and banking simply has many undeniable advantages. How do we
                    want to function? What are our goals? Well, we believe that we have a unique opportunity to improve and simplify the
                    transfer of money between people. Just. We want to "spare" banking systems from the mundane activity of lending money to
                    people who need it, while offering a good way to invest it. Internet and mobile phones are a great tool for this. By the
                    way, we want to encourage people who so far - for various reasons - have not used the offer of banks to use our offer.
                    Draco Social Lending gives them the opportunity to meet the needs that banks have not satisfied so far. We hope that
                    what is now a niche in the market will one day become a very common service. After all, each of us has financial needs,
                    but not everyone wants to meet them through an intermediary such as a bank.
                </StyledParagraph>
                <StyledWishes>
                    <p>With wishes of big money on the account,</p>
                    <p>Draco Social Lending team</p>
                </StyledWishes>
            </StyledAbout>
        </StyledContainer>
    );
};
