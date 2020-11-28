import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getAuctionsList, getAuctionsListWithoutToken, postAuction} from '../../../src/api/auctionsApi';

jest.mock('../../../src/api/rest/axios');

describe('auctionsApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
        mocked(axios.post).mockReset();
    });
    it('get calls request for own auctions list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const config = {
            headers: {'x-authorization': 'tokenStorage'},
            params: {yours: true},
        };

        const request = await getAuctionsList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/auctions', config);
    });

    it('get calls request for auctions without token and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getAuctionsListWithoutToken();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/auctions/public');
    });

    it('post calls request for auctions with token and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            id: '2s4dfs33932',
            loanAmount: 500,
            timePeriod: 6,
            interestRate: 7,
            endDate: 2,
            username: 'Max',
        };

        const config = {
            headers: {'x-authorization': 'tokenStorage'},
        };

        const request = await postAuction(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/auctions', values, config);
    });
});
