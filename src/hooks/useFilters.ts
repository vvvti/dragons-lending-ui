import {AuctionValues, filterValues} from '../helpers/types';
import {useMemo, useState} from 'react';

export const useFilters = (activeAuctions?: AuctionValues[]) => {
    const [filterConfig, setFilterConfig] = useState<filterValues>({
        sort: false,
        filter: false,
        active: false,
    });

    const sortedItems = useMemo(() => {
        if (!activeAuctions) {
            return;
        }
        let sortedAuctions = activeAuctions;
        if (filterConfig.active) {
            if (filterConfig.sort) {
                sortedAuctions = sortedAuctions.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            } else {
                sortedAuctions = sortedAuctions.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            }
            if (filterConfig.filter) {
                sortedAuctions = sortedAuctions.filter(({loanAmount}) => loanAmount <= 500);
            } else {
                return sortedAuctions;
            }
            return sortedAuctions;
        }
        return sortedAuctions;
    }, [activeAuctions, filterConfig]);

    return {
        sortedItems,
        setFilterConfig,
        filterConfig,
    };
};
