import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {deleteAuctionItem, getAuctionsList, getAuctionsListWithoutToken, postAuction} from '../../../src/api/auctionsApi';

jest.mock('../../../src/api/rest/axios');

describe('auctionsApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
        mocked(axios.post).mockReset();
        mocked(axios.delete).mockReset();
    });
    it('get calls request for own auctions list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getAuctionsList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
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
            loanAmount: 500,
            timePeriod: 6,
            interestRate: 7,
            endDate: 2,
        };

        const request = await postAuction(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/auctions', values);
    });

    it('delete calls request for auction and passes response', async () => {
        mocked(axios.delete).mockResolvedValue({data: 'getDataMock'});

        const id = 'b0453655-7b5d-44be-985c-759f6036f87a';

        const request = await deleteAuctionItem(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(axios.delete).toHaveBeenCalledWith(`/auctions/${id}`);
    });
});
