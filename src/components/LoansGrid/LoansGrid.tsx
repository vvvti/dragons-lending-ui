import React, {useEffect, useState} from 'react';
import {
    GridButton,
    GridView,
    ItemContainer,
    StyledAccordion,
    StyledAvatar,
    StyledButton,
    StyledDaysLeft,
    StyledImage,
    StyledLoanDetails,
    StyledPagination,
    StyledSpan,
    StyledTitle,
} from './LoansGrid.styled';
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from '@material-ui/core';
import {useFilters} from '../../hooks/useFilters';
import {LoansHeader} from './LoansHeader/LoansHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InvestForm} from './InvestForm/InvestForm';
import {useOffer} from '../../hooks/useOffer';
import {POSTSPERPAGE} from '../../helpers/constants';
import {pages, urlArray} from './LoansGrid.helpers';

export const LoansGrid: React.FC = () => {
    const {getOffers, offersList} = useOffer();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getOffers();
    }, [getOffers]);

    const activeOffers = offersList.map((obj, index) => ({...obj, url: urlArray[index]}));
    const {sortedItems, setFilterConfig, filterConfig} = useFilters(activeOffers);

    const indexOfLastPost = currentPage * POSTSPERPAGE;
    const indexOfFirstPost = indexOfLastPost - POSTSPERPAGE;
    const currentPosts = sortedItems.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const pageNumbers = pages(sortedItems);

    return (
        <>
            <GridButton>
                <Button
                    variant="contained"
                    color={!filterConfig.sort ? 'primary' : 'secondary'}
                    onClick={() =>
                        setFilterConfig((prevState: any) => ({
                            ...prevState,
                            sort: !prevState.sort,
                            active: true,
                        }))
                    }
                >
                    Sort by amount
                </Button>
                <Button
                    variant="contained"
                    color={!filterConfig.filter ? 'primary' : 'secondary'}
                    onClick={() =>
                        setFilterConfig((prevState: any) => ({
                            ...prevState,
                            filter: !prevState.filter,
                            active: true,
                        }))
                    }
                >
                    Loans up to 500 GBP
                </Button>
            </GridButton>
            <GridView data-testid={'grid-results'}>
                <LoansHeader />
                {Number(currentPosts.length) ? (
                    currentPosts.map(({id, loanAmount, url, endDate, timePeriod, interestRate}) => {
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
            <StyledPagination>
                {pageNumbers.map((number: any) => (
                    <StyledButton key={number} onClick={() => paginate(number)}>
                        {number}
                    </StyledButton>
                ))}
            </StyledPagination>
        </>
    );
};
