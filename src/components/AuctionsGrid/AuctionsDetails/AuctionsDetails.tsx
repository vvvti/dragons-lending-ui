import React from 'react';
import {
    GridView,
    ItemContainer,
    StyledAccordion,
    StyledAvatar,
    StyledAvatarContainer,
    StyledDaysLeft,
    StyledImage,
    StyledLoanDetails,
    StyledSpan,
    StyledTitle,
} from './AuciotnsDetails.styled';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AuctionValues} from '../../../helpers/types';
import {InvestForm} from '../InvestForm/InvestForm';
import {Loading} from '../../Loading/Loading';
import {AuctionsHeader} from '../AuctionsHeader/AuctionsHeader';

export const AuctionsDetails: React.FC<{currentAuctions: AuctionValues[]}> = ({currentAuctions}) => {
    return (
        <GridView data-testid={'grid-results'}>
            <AuctionsHeader />
            {Number(currentAuctions.length) ? (
                currentAuctions.map(({id, loanAmount, url, endDate, timePeriod, interestRate, username}) => {
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
                                    Expire on: <StyledSpan>{`${endDate[2]}-${endDate[1]}-${endDate[0]}`}</StyledSpan>
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
                })
            ) : (
                <Loading />
            )}
        </GridView>
    );
};
