import {AuctionValues, filterValues} from '../helpers/types';
import {useMemo, useState} from 'react';

export const useFilters = (activeAuctions: AuctionValues[]) => {
    const [filterConfig, setFilterConfig] = useState<filterValues>({
        sort: false,
        filter: false,
        active: false,
    });

    const sortedItems = useMemo(() => {
        let sortedUsers = activeAuctions;
        if (filterConfig.active) {
            if (filterConfig.sort) {
                sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            } else {
                sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            }
            if (filterConfig.filter) {
                sortedUsers = sortedUsers.filter((data: AuctionValues) => data.loanAmount <= 500);
            } else {
                return sortedUsers;
            }
            return sortedUsers;
        }
        return sortedUsers;
    }, [activeAuctions, filterConfig]);

    return {
        sortedItems,
        setFilterConfig,
        filterConfig,
    };
};
