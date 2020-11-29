import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getAccountBalance, postDeposit, postWithdraw} from '../../../src/api/accountBalanceApi';

jest.mock('../../../src/api/rest/axios');

describe('accountBalanceApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
        mocked(axios.post).mockReset();
    });
    it('get calls request for Account Balance list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getAccountBalance();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('post calls request for Withdraw and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            requestedAccountNumber: 'b0453655-7b5d-44be-985c-759f6036f87a',
            amount: 500,
        };

        const request = await postWithdraw(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/account/withdraw', values);
    });

    it('post calls request for Deposit and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});

        const values = {
            fromAccountNumber: 'b0453655-7b5d-44be-985c-759f6036f87a',
            amount: 200,
        };

        const request = await postDeposit(values);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('/paymentplatform/deposit', values);
    });
});
