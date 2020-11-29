import React from 'react';
import {
    ItemContainer,
    StyledAccordion,
    StyledAvatar,
    StyledAvatarContainer,
    StyledDaysLeft,
    StyledImage,
    StyledLoanDetails,
    StyledSpan,
    StyledTitle,
} from './AuciotnDetails.styled';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import format from 'date-fns/format';
import {InvestForm} from '../../InvestForm/InvestForm';
import {AuctionValues} from '../../../../helpers/types';

export const AuctionDetails: React.FC<{auction: AuctionValues}> = ({
    auction: {id, timePeriod, url, loanAmount, interestRate, username, endDate},
}) => {
    return (
        <ItemContainer key={id}>
            <StyledAvatarContainer>
                <StyledAvatar>
                    <StyledImage src={url} alt="" />
                </StyledAvatar>
                {username}
            </StyledAvatarContainer>
            <StyledLoanDetails>
                <StyledDaysLeft>
                    Expire on:
                    <StyledSpan>{format(new Date(endDate), 'dd-MM-yyyy')}</StyledSpan>
                </StyledDaysLeft>
                <StyledTitle>Want to borrow</StyledTitle>
                <div>
                    <StyledSpan>{loanAmount} GBP</StyledSpan> at <StyledSpan>{interestRate} %</StyledSpan>
                    <div>
                        for <StyledSpan>{timePeriod === 1 ? `${timePeriod} month` : `${timePeriod} months`}</StyledSpan>
                    </div>
                </div>
            </StyledLoanDetails>
            <StyledAccordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>Expand to Invest</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <InvestForm loanAmount={loanAmount} interestRate={interestRate} auctionId={id} />
                    </AccordionDetails>
                </Accordion>
            </StyledAccordion>
        </ItemContainer>
    );
};
