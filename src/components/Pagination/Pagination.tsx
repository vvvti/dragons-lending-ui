import React from 'react';
import {StyledPageNumber, StyledPagination} from './Pagination.styled';

export interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    onClick: (number: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({postsPerPage, totalPosts, onClick}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <StyledPagination>
            {pageNumbers.map((number: number) => (
                <StyledPageNumber key={number} onClick={() => onClick(number)}>
                    {number}
                </StyledPageNumber>
            ))}
        </StyledPagination>
    );
};
