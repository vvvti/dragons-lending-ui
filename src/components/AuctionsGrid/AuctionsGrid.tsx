import React, {useEffect, useState} from 'react';
import {ButtonsGrid, StyledButton} from './AuciotnsGrid.styled';
import {useFilters} from '../../hooks/useFilters';
import {useAuctions} from '../../hooks/useAuctions';
import {POSTSPERPAGE} from '../../helpers/constants';
import {getImagesUrl} from './AuctionsGrid.helpers';
import {AuctionsDetails} from './AuctionsDetails/AuctionsDetails';
import {filterValues} from '../../helpers/types';
import {Pagination} from '../Pagination/Pagination';

export const AuctionsGrid: React.FC = () => {
    const {getAuctions, auctionsList} = useAuctions();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortState, setSortState] = useState<string>('');

    useEffect(() => {
        getAuctions();
    }, [getAuctions]);

    const urlArray = getImagesUrl(auctionsList);

    const activeAuctions = auctionsList.map((obj, index) => ({...obj, url: urlArray[index]}));
    const {sortedItems, setFilterConfig, filterConfig} = useFilters(activeAuctions);

    const indexOfLastPost = currentPage * POSTSPERPAGE;
    const indexOfFirstPost = indexOfLastPost - POSTSPERPAGE;
    const currentAuctions = sortedItems.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const setDisplayedSorting = () => {
        if (sortState === 'ascending') {
            setSortState('descending');
        }
    };

    return (
        <>
            {Number(auctionsList.length) ? (
                <ButtonsGrid>
                    <StyledButton
                        variant="contained"
                        color={!sortState ? 'primary' : 'secondary'}
                        onClick={() => {
                            setSortState('ascending');
                            setDisplayedSorting();
                            setFilterConfig((prevState: filterValues) => ({
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
                            setFilterConfig((prevState: filterValues) => ({
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
                </ButtonsGrid>
            ) : (
                ''
            )}
            <AuctionsDetails currentAuctions={currentAuctions} />
            <Pagination postsPerPage={POSTSPERPAGE} totalPosts={sortedItems.length} paginate={paginate} />
        </>
    );
};
