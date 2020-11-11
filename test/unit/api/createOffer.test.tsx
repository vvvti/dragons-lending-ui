import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getOffer, getOffersList, postOffer, putOffer} from '../../../src/api/createOfferApi';

jest.mock('../../../src/api/rest/axios');

describe('basketApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('get calls request for offers list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getOffersList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('/offers');
    });

    it('post calls request for offer and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const data = {
            loanAmount: 500,
            timePeriod: 12,
            interestRate: 7.5,
            endDate: '25-12-2021',
        };

        const request = await postOffer(data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith('/offers', data);
    });

    it('get calls request for offer and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

        const request = await getOffer(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith(`/offers/${id}`);
    });

    it('put calls request for offer update and passes response', async () => {
        mocked(axios.put).mockResolvedValue({data: 'getDataMock'});
        const data = {
            loanAmount: 500,
            timePeriod: 12,
            interestRate: 7.5,
            endDate: '25-12-2021',
        };

        const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

        const request = await putOffer(id, data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.put).toHaveBeenCalledWith(`/offers/${id}`, data);
    });
});
