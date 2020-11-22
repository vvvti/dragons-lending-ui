import {mocked} from 'ts-jest/utils';
import {axios} from '../../../src/api/rest/axios';
import {postRegisterValues} from '../../../src/api/registerApi';

jest.mock('../../../src/api/rest/axios');

describe('registerApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('post calls request for user registration and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            email: 'example@example.com',
            username: 'example',
            password: 'example2020',
            firstName: 'fistExample',
            lastName: 'lastExample',
        };

        const request = await postRegisterValues(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith('/users/sign-up', values);
    });
});
