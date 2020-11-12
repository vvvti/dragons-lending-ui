import React, {useState} from 'react';
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
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {data, images} from './data';
import {OfferItems} from '../../helpers/types';

export const LoansGrid: React.FC = () => {
    const offerArray = data.map(obj => ({...obj, url: images[obj.id]}));
    // const {offerList, getOfferList} = useOfferList();
    // const [sortedList, setSortedList] = useState()
    const [filteredList, setFilteredList] = useState<OfferItems>(offerArray);
    const [isSorted, setIsSorted] = useState(false);

    // useEffect(() => {
    //     getOfferList();
    // }, [getOfferList]);

    // console.log('getOfferList', offerList);

    const filterOneMonth = () => {
        let filteredData = offerArray;
        filteredData = filteredData.filter(data => data.timePeriod === 1);
        setFilteredList(filteredData);
    };

    const filterUpTo = (loanValue: number) => {
        let filteredData = offerArray;
        filteredData = filteredData.filter(data => data.loanAmount < loanValue);
        setFilteredList(filteredData);
    };

    const clearFilterArray = () => {
        setFilteredList(offerArray);
    };

    const sortByAmount = () => {
        let sortedUsers = filteredList;
        if (!isSorted) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            setFilteredList(sortedUsers);
            setIsSorted(true);
        } else {
            {
                sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
                setFilteredList(sortedUsers);
                setIsSorted(false);
            }
        }
    };

    const sortByExpireDate = () => {
        let sortedUsers = filteredList;
        if (!isSorted) {
            sortedUsers = sortedUsers.sort((a, b) => (Date.parse(a.endDate) > Date.parse(b.endDate) ? 1 : -1));
            setFilteredList(sortedUsers);
            setIsSorted(true);
        } else {
            {
                sortedUsers = sortedUsers.sort((a, b) => (Date.parse(b.endDate) > Date.parse(a.endDate) ? 1 : -1));
                setFilteredList(sortedUsers);
                setIsSorted(false);
            }
        }
    };

    return (
        <GridView data-testid={'grid-results'}>
            <Button size="small" variant="contained" color="primary" onClick={filterOneMonth}>
                one-month loans
            </Button>
            <Button size="small" variant="contained" color="primary" onClick={() => filterUpTo(500)}>
                loans up to 500 GBP
            </Button>
            <Button size="small" variant="contained" color="primary" onClick={() => filterUpTo(1000)}>
                loans up to 1000 GBP
            </Button>

            <Button size="small" variant="contained" color="primary" onClick={sortByAmount}>
                Sort by amount
            </Button>
            <Button size="small" variant="contained" color="primary" onClick={sortByExpireDate}>
                Sort by expire date
            </Button>
            <Button size="small" variant="contained" color="primary" onClick={clearFilterArray}>
                Clear
            </Button>

            <LoansHeader />
            {Number(filteredList.length) ? (
                filteredList.map(({id, loanAmount, url, endDate, timePeriod, interestRate}) => {
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
                })
            ) : (
                <div>No results</div>
            )}
        </GridView>
    );
};
