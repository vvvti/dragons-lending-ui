import {mocked} from 'ts-jest/utils';
import {axios} from '../../../src/api/rest/axios';
import {postValuesToInvest} from '../../../src/api/investApi';

jest.mock('../../../src/api/rest/axios');

describe('investApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('post calls request for invest values and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            investAmount: 400,
            investRate: 3,
            auctionId: 'b0453655-7b5d-44be-985c-759f6036f87a',
        };

        const request = await postValuesToInvest(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/offers', values);
    });
});
