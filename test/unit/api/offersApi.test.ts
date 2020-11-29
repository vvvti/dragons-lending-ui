import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {deleteOfferItem, postAcceptLoan, getOffersList, getReceivedOffersList, postOffersList} from '../../../src/api/offersApi';

jest.mock('../../../src/api/rest/axios');

describe('offersApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
        mocked(axios.post).mockReset();
        mocked(axios.delete).mockReset();
    });
    it('get calls request for submitted offers list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getOffersList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/offers/user');
    });

    it('get calls request for received offers and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getReceivedOffersList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/offers/received');
    });

    it('post calls request for auctions with token and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            offerAmount: 500,
            interestRate: 2,
            auctionId: 'b0453655-7b5d-44be-985c-759f6036f87a',
        };

        const request = await postOffersList(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/offers', values);
    });

    it('delete calls request for offer and passes response', async () => {
        mocked(axios.delete).mockResolvedValue({data: 'getDataMock'});

        const id = 'b0453655-7b5d-44be-985c-759f6036f87a';

        const request = await deleteOfferItem(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(axios.delete).toHaveBeenCalledWith(`/offers/${id}`);
    });

    it('get calls request for accept offers and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const id = 'b0453655-7b5d-44be-985c-759f6036f87a';

        const request = await postAcceptLoan(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith(`/offers/${id}/select`);
    });
});
