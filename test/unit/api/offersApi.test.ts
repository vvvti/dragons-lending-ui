import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getOffersList, getOffersListWithoutToken, postOffer} from '../../../src/api/offersApi';

jest.mock('../../../src/api/rest/axios');

describe('offersApi', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('get calls request for own offers list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const config = {
            headers: {'x-authorization': 'tokenStorage'},
            params: {yours: true},
        };

        const request = await getOffersList(config);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/auctions', config);
    });

    it('get calls request for offers without token and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getOffersListWithoutToken();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith('/auctions/public');
    });

    it('post calls request for offers with token and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            id: '2s4dfs33932',
            loanAmount: 500,
            timePeriod: 6,
            interestRate: 7,
            endDate: '25-12-2022',
        };

        const config = {
            headers: {'x-authorization': 'tokenStorage'},
        };

        const request = await postOffer(values, config);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/auctions', values, config);
    });
});
