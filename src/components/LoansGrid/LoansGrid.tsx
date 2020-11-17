import React, {useEffect} from 'react';
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
import {useOffer} from '../../hooks/useOffer';

export const LoansGrid: React.FC = () => {
    const {filterOneMonth, sortByAmount, sortByExpireDate, sortFilteredList, isUpTo, isSortedByDuration, isSortedByAmount} = useFilters();
    const {getOffers} = useOffer();

    useEffect(() => {
        getOffers();
    }, [getOffers]);

    return (
        <>
            <GridButton>
                <Button variant="contained" color={isSortedByAmount ? 'secondary' : 'primary'} onClick={sortByAmount}>
                    Sort by amount
                </Button>
                <Button variant="contained" color={isSortedByDuration ? 'secondary' : 'primary'} onClick={sortByExpireDate}>
                    Sort by loan duration
                </Button>
                <Button variant="contained" color={isUpTo ? 'primary' : 'secondary'} onClick={filterOneMonth}>
                    Loans up to 500 GBP
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
                                        Expire on: <StyledSpan>{endDate}</StyledSpan>
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
