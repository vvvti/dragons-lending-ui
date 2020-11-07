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
    return (
        <GridView>
            <LoansHeader />
            <ItemContainer>
                <StyledAvatar>OW</StyledAvatar>
                <StyledLoanDetails>
                    <StyledDaysLeft>
                        Left: <StyledSpan>55 days</StyledSpan>
                    </StyledDaysLeft>
                    <StyledTitle>Want to borrow</StyledTitle>
                    <div>
                        <StyledSpan>500 GBP</StyledSpan> for <StyledSpan>30 days </StyledSpan>
                        <div>
                            {' '}
                            at <StyledSpan>7 %</StyledSpan> bonus <StyledSpan>30 GBP</StyledSpan>
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
