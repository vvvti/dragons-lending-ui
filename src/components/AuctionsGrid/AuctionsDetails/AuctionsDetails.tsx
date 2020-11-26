import React from 'react';

// TODO: Can't pass currentPosts props with TS

export const AuctionsDetails: React.FC = () => {
    return (
        <div>AuctionsDetails</div>
        // {Number(currentPosts.length) ? (
        //     currentPosts.map(({id, loanAmount, url, endDate, timePeriod, interestRate, username}) => {
        //         return (
        //             <ItemContainer key={id}>
        //                 <StyledAvatarContainer>
        //                     <StyledAvatar>
        //                         <StyledImage src={url} alt=""/>
        //                     </StyledAvatar>
        //                     {username}
        //                 </StyledAvatarContainer>
        //                 <StyledLoanDetails>
        //                     <StyledDaysLeft>
        //                         Expire
        //                         on: <StyledSpan>{`${endDate[2]}-${endDate[1]}-${endDate[0]}`}</StyledSpan>
        //                     </StyledDaysLeft>
        //                     <StyledTitle>Want to borrow</StyledTitle>
        //                     <div>
        //                         <StyledSpan>{loanAmount} GBP</StyledSpan> at <StyledSpan>{interestRate} %</StyledSpan>
        //                         <div>
        //                             for <StyledSpan>{timePeriod === 1 ? `${timePeriod} month` : `${timePeriod} months`}</StyledSpan>
        //                         </div>
        //                     </div>
        //                 </StyledLoanDetails>
        //                 <StyledAccordion>
        //                     <Accordion>
        //                         <AccordionSummary
        //                             expandIcon={<ExpandMoreIcon/>}
        //                             aria-controls="panel1a-content"
        //                             id="panel1a-header"
        //                         >
        //                             <Typography>Expand to Invest</Typography>
        //                         </AccordionSummary>
        //                         <AccordionDetails>
        //                             <InvestForm loanAmount={loanAmount} interestRate={interestRate}
        //                                         auctionId={id}/>
        //                         </AccordionDetails>
        //                     </Accordion>
        //                 </StyledAccordion>
        //             </ItemContainer>
        //         );
        //     })
        // ) : (
        //     <Loading/>
        // )}
    );
};
