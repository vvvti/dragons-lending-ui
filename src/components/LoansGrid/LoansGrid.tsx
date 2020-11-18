import React, {useEffect, useState} from 'react';
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
import {Pagination} from '@material-ui/lab';

export const LoansGrid: React.FC = () => {
    const {filterOneMonth, sortByAmount, sortByExpireDate, isUpTo, isSortedByDuration, isSortedByAmount} = useFilters();
    const {getOffers, offersList} = useOffer();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    let urlArray: string[] = [];

    for (let i = 0; i < 100; i++) {
        if (i % 2) {
            urlArray.push(`https://randomuser.me/api/portraits/men/${i}.jpg`);
        } else {
            urlArray.push(`https://randomuser.me/api/portraits/women/${i}.jpg`);
        }
    }

    const activeAuctions = offersList.map((obj, index) => ({...obj, url: urlArray[index]}));

    // get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = activeAuctions.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(activeAuctions.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log('pageNumbers', pageNumbers);

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
            <Pagination count={10} color="primary" />
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((number: any) => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
