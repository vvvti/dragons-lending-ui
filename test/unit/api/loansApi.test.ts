import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {deleteAuctionItem, getAuctionsList, getAuctionsListWithoutToken, postAuction} from '../../../src/api/auctionsApi';
import {deleteOfferItem, postAcceptLoan, getOffersList, getReceivedOffersList, postOffersList} from '../../../src/api/offersApi';
import {getLoansList, getRepaymentLoan} from '../../../src/api/loansApi';

jest.mock('../../../src/api/rest/axios');

describe('loansApi', () => {
    afterEach(() => {
        mocked(axios.get).mockReset();
    });
    it('get calls request for loans list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const request = await getLoansList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/loans/self');
    });

    it('get calls request for received repayment and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});

        const id = 'b0453655-7b5d-44be-985c-759f6036f87a';

        const request = await getRepaymentLoan(id);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`/loans/${id}`);
    });
});
