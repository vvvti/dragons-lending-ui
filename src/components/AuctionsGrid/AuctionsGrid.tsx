import React, {useEffect, useState} from 'react';
import {ButtonsGrid, StyledButton} from './AuciotnsGrid.styled';
import {useFilters} from '../../hooks/useFilters';
import {useGetAuctions} from '../../hooks/useGetAuctions';
import {POSTSPERPAGE} from '../../helpers/constants';
import {getImagesUrl, handleFilterClick, handleResetClick, handleSortByClick, slicePage} from './AuctionsGrid.helpers';
import {AuctionsDetails} from './AuctionsDetails/AuctionsDetails';
import {Pagination} from '../Pagination/Pagination';

export const AuctionsGrid: React.FC = () => {
    const {getAuctions, auctionsList} = useGetAuctions();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortState, setSortState] = useState<string>('');

    useEffect(() => {
        getAuctions();
    }, [getAuctions]);

    const urlArray = getImagesUrl(auctionsList);

    const activeAuctions = auctionsList.map((obj, index) => ({...obj, url: urlArray[index]}));
    const {sortedItems, setFilterConfig, filterConfig} = useFilters(activeAuctions);

    const currentAuctions = slicePage(currentPage, sortedItems);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            {auctionsList.length > 0 && (
                <ButtonsGrid>
                    <StyledButton
                        variant="contained"
                        color={!sortState ? 'primary' : 'secondary'}
                        onClick={() => handleSortByClick(setSortState, sortState, setFilterConfig)}
                    >
                        Sort by {sortState} amount
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        color={!filterConfig.filter ? 'primary' : 'secondary'}
                        onClick={() => handleFilterClick(setCurrentPage, setFilterConfig)}
                    >
                        Auctions up to 500 GBP
                    </StyledButton>
                    <StyledButton variant="contained" color="primary" onClick={() => handleResetClick(setSortState, setFilterConfig)}>
                        Reset
                    </StyledButton>
                </ButtonsGrid>
            )}
            <AuctionsDetails currentAuctions={currentAuctions} />
            <Pagination postsPerPage={POSTSPERPAGE} totalPosts={sortedItems.length} onClick={paginate} />
        </>
    );
};
