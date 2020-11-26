import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {CreateAuction} from '../../../../src/pages/CreateAuction/CreateAuction';

describe('CreateAuction', () => {
    beforeEach(() => {
        renderWithRouter(<CreateAuction />);
    });

    it('submit button disabled on invalid values', async () => {
        const loanAmountInput = screen.getByLabelText(/borrow/i);
        userEvent.clear(loanAmountInput);
        await userEvent.type(loanAmountInput, '500');

        const timePeriodInput = screen.getByLabelText(/period/i);
        userEvent.clear(timePeriodInput);
        await userEvent.type(timePeriodInput, '2');

        const interestRateInput = screen.getByLabelText(/interests/i);
        userEvent.clear(interestRateInput);
        await userEvent.type(interestRateInput, '-77');

        const endDateInput = screen.getByLabelText(/Auction expiry date/i);
        await fireEvent.change(endDateInput, '12-25-2019');

        const submitButton = screen.getByRole('button', {name: /create an auction/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });

    it('loan amount should display error on invalid values', async () => {
        const loanAmountInput = screen.getByLabelText(/borrow/i);
        userEvent.clear(loanAmountInput);
        await userEvent.type(loanAmountInput, '100000000');

        fireEvent.blur(loanAmountInput);
        await screen.findByText(/You can select max/i);
    });
    it('time Period should display error on invalid values', async () => {
        const timePeriodInput = screen.getByLabelText(/period/i);
        userEvent.clear(timePeriodInput);
        await userEvent.type(timePeriodInput, '50');

        fireEvent.blur(timePeriodInput);
        await screen.findByText('You can select max 36 months');
    });
    it('interest rate amount should display error on invalid values', async () => {
        const interestRateInput = screen.getByLabelText(/interests/i);
        userEvent.clear(interestRateInput);
        await userEvent.type(interestRateInput, '-77');

        fireEvent.blur(interestRateInput);
        await screen.findByText('Amount must be 0 or higher');
    });
});
