import {mocked} from 'ts-jest/utils';
import {axios} from '../../../src/api/rest/axios';
import {postLoginValues} from '../../../src/api/loginApi';

jest.mock('../../../src/api/rest/axios');

describe('loginApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('post calls request for user login and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            email: ' example@example.com',
            password: 'example2020',
        };

        const request = await postLoginValues(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith('/login', values);
    });
});
