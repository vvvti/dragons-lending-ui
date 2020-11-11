import React from 'react';
import {
    GridView,
    ItemContainer,
    StyledAccordion,
    StyledAvatar,
    StyledDaysLeft,
    StyledImage,
    StyledLoanDetails,
    StyledSpan,
    StyledTitle,
} from './LoansGrid.styled';
import {LoansHeader} from './LoansHeader/LoansHeader';
import {InvestForm} from './InvestForm/InvestForm';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {data, images} from './data';

export const LoansGrid = () => {
    const newData = data.map(obj => ({...obj, url: images[obj.id]}));

    console.log(newData);
    return (
        <GridView data-testid={'grid-results'}>
            <LoansHeader />
            {newData.map(({id, loanAmount, url, endDate, timePeriod, interestRate}) => {
                return (
                    <ItemContainer key={id}>
                        <StyledAvatar>
                            <StyledImage src={url} alt="" />
                        </StyledAvatar>
                        <StyledLoanDetails>
                            <StyledDaysLeft>
                                Left: <StyledSpan>{endDate}</StyledSpan>
                            </StyledDaysLeft>
                            <StyledTitle>Want to borrow</StyledTitle>
                            <div>
                                <StyledSpan>{loanAmount} GBP</StyledSpan> at <StyledSpan>{interestRate} %</StyledSpan>
                                <div>
                                    for <StyledSpan>{timePeriod * 30} days </StyledSpan>
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
