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

export const AuctionDetails: React.FC<{auction: AuctionValues}> = ({auction}) => {
    return (
        <ItemContainer key={auction.id}>
            <StyledAvatarContainer>
                <StyledAvatar>
                    <StyledImage src={auction.url} alt="" />
                </StyledAvatar>
                {auction.username}
            </StyledAvatarContainer>
            <StyledLoanDetails>
                <StyledDaysLeft>
                    Expire on:
                    <StyledSpan>{format(new Date(auction.endDate), 'MM-dd-yyyy')}</StyledSpan>
                </StyledDaysLeft>
                <StyledTitle>Want to borrow</StyledTitle>
                <div>
                    <StyledSpan>{auction.loanAmount} GBP</StyledSpan> at <StyledSpan>{auction.interestRate} %</StyledSpan>
                    <div>
                        for{' '}
                        <StyledSpan>{auction.timePeriod === 1 ? `${auction.timePeriod} month` : `${auction.timePeriod} months`}</StyledSpan>
                    </div>
                </div>
            </StyledLoanDetails>
            <StyledAccordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>Expand to Invest</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <InvestForm loanAmount={auction.loanAmount} interestRate={auction.interestRate} auctionId={auction.id} />
                    </AccordionDetails>
                </Accordion>
            </StyledAccordion>
        </ItemContainer>
    );
};
