import * as Factory from 'factory.ts';
import {CreateOfferFormValues} from '../../src/helpers/types';

export const createOfferFactory = Factory.Sync.makeFactory<CreateOfferFormValues>({
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7.5,
    endDate: new Date(),
});
