import React from 'react';
import {
    GridButton,
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
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from '@material-ui/core';
import {useFilters} from '../../hooks/useFilters';
import {LoansHeader} from './LoansHeader/LoansHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InvestForm} from './InvestForm/InvestForm';

export const LoansGrid: React.FC = () => {
    const {filterOneMonth, filterUpTo, sortByAmount, sortByExpireDate, clearFilterArray, sortFilteredList} = useFilters();

    return (
        <>
            <GridButton>
                <Button variant="contained" color="primary" onClick={filterOneMonth}>
                    one-month loans
                </Button>
                <Button variant="contained" color="primary" onClick={() => filterUpTo(500)}>
                    loans up to 500 GBP
                </Button>
                <Button variant="contained" color="primary" onClick={() => filterUpTo(1000)}>
                    loans up to 1000 GBP
                </Button>
                <Button variant="contained" color="primary" onClick={sortByAmount}>
                    Sort by amount
                </Button>
                <Button variant="contained" color="primary" onClick={sortByExpireDate}>
                    Sort by expire date
                </Button>
                <Button variant="contained" color="primary" onClick={clearFilterArray}>
                    Clear
                </Button>
            </GridButton>
            <GridView data-testid={'grid-results'}>
                <LoansHeader />
                {Number(sortFilteredList.length) ? (
                    sortFilteredList.map(({id, loanAmount, url, endDate, timePeriod, interestRate}) => {
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
                                            for <StyledSpan>{timePeriod} months </StyledSpan>
                                        </div>
                                    </div>
                                </StyledLoanDetails>
                                <StyledAccordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Expand to Invest</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <InvestForm loanAmount={loanAmount} interestRate={interestRate} />
                                        </AccordionDetails>
                                    </Accordion>
                                </StyledAccordion>
                            </ItemContainer>
                        );
                    })
                ) : (
                    <div>No results</div>
                )}
            </GridView>
        </>
    );
};
