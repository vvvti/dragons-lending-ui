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

export const LoansGrid = () => {
    const data = [
        {
            id: 1,
            loanAmount: 1000,
            timePeriod: 2,
            interestRate: 7,
            endDate: '2020-12-22',
        },
        {
            id: 2,
            loanAmount: 500,
            timePeriod: 10,
            interestRate: 7,
            endDate: '2020-12-22',
        },
        {
            id: 3,
            loanAmount: 200,
            timePeriod: 4,
            interestRate: 6,
            endDate: '2020-12-22',
        },
    ];
    return (
        <GridView>
            <LoansHeader />
            {data.map(({loanAmount, timePeriod, interestRate}) => {
                return (
                    <ItemContainer>
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
                                    <InvestForm />
                                </AccordionDetails>
                            </Accordion>
                        </StyledAccordion>
                    </ItemContainer>
                );
            })}

            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
        </GridView>
    );
};
