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
    StyledPageNumber,
    StyledPagination,
    StyledSpan,
    StyledTitle,
} from './OffersGrid.styled';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {useFilters} from '../../hooks/useFilters';
import {OffersHeader} from './OffersHeader/OffersHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InvestForm} from './InvestForm/InvestForm';
import {useOffer} from '../../hooks/useOffer';
import {POSTSPERPAGE} from '../../helpers/constants';
import {getImagesUrl, getPageNumbers} from './OffersGrid.helpers';
import {Loading} from '../Loading/Loading';

export const OffersGrid: React.FC = () => {
    const {getOffers, offersList} = useOffer();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortState, setSortState] = useState<string>('');

    useEffect(() => {
        getOffers();
    }, [getOffers]);

    const urlArray = getImagesUrl(offersList);

    const activeOffers = offersList.map((obj, index) => ({...obj, url: urlArray[index]}));
    const {sortedItems, setFilterConfig, filterConfig} = useFilters(activeOffers);

    const indexOfLastPost = currentPage * POSTSPERPAGE;
    const indexOfFirstPost = indexOfLastPost - POSTSPERPAGE;
    const currentPosts = sortedItems.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const pageNumbers = getPageNumbers(sortedItems);

    const setDisplayedSorting = () => {
        if (sortState === 'ascending') {
            setSortState('descending');
        }
    };

    return (
        <>
            {Number(offersList.length) ? (
                <GridButton>
                    <StyledButton
                        variant="contained"
                        color={!sortState ? 'primary' : 'secondary'}
                        onClick={() => {
                            setSortState('ascending');
                            setDisplayedSorting();
                            setFilterConfig((prevState: any) => ({
                                ...prevState,
                                sort: !prevState.sort,
                                active: true,
                            }));
                        }}
                    >
                        Sort by {sortState} amount
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        color={!filterConfig.filter ? 'primary' : 'secondary'}
                        onClick={() => {
                            setCurrentPage(1);
                            setFilterConfig((prevState: any) => ({
                                ...prevState,
                                filter: !prevState.filter,
                                active: true,
                            }));
                        }}
                    >
                        Auctions up to 500 GBP
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setSortState('');
                            setFilterConfig((prevState: any) => ({
                                ...prevState,
                                filter: false,
                                active: false,
                            }));
                        }}
                    >
                        Reset
                    </StyledButton>
                </GridButton>
            ) : (
                ''
            )}
            <GridView data-testid={'grid-results'}>
                <OffersHeader />
                {Number(currentPosts.length) ? (
                    currentPosts.map(({id, loanAmount, url, endDate, timePeriod, interestRate}) => {
                        return (
                            <ItemContainer key={id}>
                                <StyledAvatar>
                                    <StyledImage src={url} alt="" />
                                </StyledAvatar>
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
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
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
            <StyledPagination>
                {pageNumbers.map((number: any) => (
                    <StyledPageNumber key={number} onClick={() => paginate(number)}>
                        {number}
                    </StyledPageNumber>
                ))}
            </StyledPagination>
        </>
    );
};
