import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getOffer, getOffersList, postOffer} from '../../../src/api/offersApi';

jest.mock('../../../src/api/rest/axios');

describe('offersApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it.skip('get calls request for offers list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const data = {
            loanAmount: 500,
            timePeriod: 12,
            interestRate: 7.5,
            endDate: '25-12-2021',
        };
        const request = await getOffersList(data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('/auctions');
    });

    it.skip('post calls request for offer and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const values = {
            loanAmount: 500,
            timePeriod: 12,
            interestRate: 7.5,
            endDate: '25-12-2021',
        };

        const data = {
            headers: {'x-authorization': 'tokenStorage'},
        };

        const request = await postOffer(data, values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith('/auctions', data);
    });

    it('get calls request for offer and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

        const request = await getOffer(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`/auctions/${id}`);
    });
});
