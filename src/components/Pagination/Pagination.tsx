import React from 'react';
import {StyledPageNumber, StyledPagination} from './Pagination.styled';

export const Pagination: React.FC<{postsPerPage: number; totalPosts: number; paginate: any}> = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <StyledPagination>
            {pageNumbers.map((number: any) => (
                <StyledPageNumber key={number} onClick={() => paginate(number)}>
                    {number}
                </StyledPageNumber>
            ))}
        </StyledPagination>
    );
};
