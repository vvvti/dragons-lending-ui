import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {CreateOffer} from '../../../../src/pages/CreateOffer/CreateOffer';

describe('CreateOffer', () => {
    test('submit button disabled on invalid values', async () => {
        renderWithRouter(<CreateOffer />);

        const loanAmountInput = screen.getByLabelText(/borrow/i);
        userEvent.clear(loanAmountInput);
        await userEvent.type(loanAmountInput, '500');

        const timePeriodInput = screen.getByLabelText(/period/i);
        userEvent.clear(timePeriodInput);
        await userEvent.type(timePeriodInput, '2');

        const interestRateInput = screen.getByLabelText(/interests/i);
        userEvent.clear(interestRateInput);
        await userEvent.type(interestRateInput, '-77');

        const endDateInput = screen.getByLabelText(/Offer expiry date/i);
        await fireEvent.change(endDateInput, '12-25-2019');

        const submitButton = screen.getByRole('button', {name: /create offer/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });

    test('loan amount should throw error on invalid values', async () => {
        renderWithRouter(<CreateOffer />);

        const loanAmountInput = screen.getByLabelText(/borrow/i);
        userEvent.clear(loanAmountInput);
        await userEvent.type(loanAmountInput, '100000000');

        fireEvent.blur(loanAmountInput);
        await screen.findByText(/You can select max/i);
    });
    test('time Period should throw error on invalid values', async () => {
        renderWithRouter(<CreateOffer />);

        const timePeriodInput = screen.getByLabelText(/period/i);
        userEvent.clear(timePeriodInput);
        await userEvent.type(timePeriodInput, '50');

        fireEvent.blur(timePeriodInput);
        await screen.findByText('You can select max 36 months');
    });
    test('interest rate amount should throw error on invalid values', async () => {
        renderWithRouter(<CreateOffer />);

        const interestRateInput = screen.getByLabelText(/interests/i);
        userEvent.clear(interestRateInput);
        await userEvent.type(interestRateInput, '-77');

        fireEvent.blur(interestRateInput);
        await screen.findByText('Amount must be 0 or higher');
    });
});
