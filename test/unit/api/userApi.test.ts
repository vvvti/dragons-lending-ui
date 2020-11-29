import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getUserValues} from '../../../src/api/userApi';

jest.mock('../../../src/api/rest/axios');

describe('userApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
    });
    it('get calls request for User details and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getUserValues();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/users/self');
    });
});
