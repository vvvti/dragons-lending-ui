import React from 'react';
import {
    GridView,
    ItemContainer,
    StyledAccordion,
    StyledAvatar,
    StyledDaysLeft,
    StyledLoanDetails,
    StyledSpan,
    StyledTitle,
} from './LoansGrid.styled';
import {LoansHeader} from './LoansHeader/LoansHeader';
import {InvestForm} from './InvestForm/InvestForm';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {data} from './data';

export const LoansGrid = () => {
    return (
        <GridView>
            <LoansHeader />
            {data.map(({id, loanAmount, timePeriod, interestRate}) => {
                return (
                    <ItemContainer key={id}>
                        <StyledAvatar>Photo</StyledAvatar>
                        <StyledLoanDetails>
                            <StyledDaysLeft>
                                Left: <StyledSpan>55 days</StyledSpan>
                            </StyledDaysLeft>
                            <StyledTitle>Want to borrow</StyledTitle>
                            <div>
                                <StyledSpan>{loanAmount} GBP</StyledSpan> for <StyledSpan>{timePeriod * 30} days </StyledSpan>
                                <div>
                                    at <StyledSpan>{interestRate} %</StyledSpan> bonus <StyledSpan>{loanAmount * 0.1} GBP</StyledSpan>
                                </div>
                            </div>
                        </StyledLoanDetails>
                        <StyledAccordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>Expand to Invest</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <InvestForm loanAmount={loanAmount} interestRate={interestRate} />
                                </AccordionDetails>
                            </Accordion>
                        </StyledAccordion>
                    </ItemContainer>
                );
            })}
        </GridView>
    );
};
