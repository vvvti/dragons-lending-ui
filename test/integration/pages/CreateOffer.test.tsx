import {fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {renderWithRouter} from '../../_helpers/renderWithRouters';
import {CreateOffer} from '../../../src/pages/CreateOffer/CreateOffer';

describe('CreateOffer', () => {
    test('submit button disabled on invalid values', () => {
        renderWithRouter(<CreateOffer />);

        const loanAmountInput = screen.getByLabelText(/borrow/i);
        userEvent.type(loanAmountInput, '500');

        const timePeriodInput = screen.getByLabelText(/period/i);
        userEvent.type(timePeriodInput, '2');

        const interestRateInput = screen.getByLabelText(/interests/i);
        userEvent.type(interestRateInput, '-77');

        const endDateInput = screen.getByLabelText(/expireDate/i);
        fireEvent.change(endDateInput, '25-12-2019');

        const submitButton = screen.getByRole('button', {name: /create offer/i});

        expect(submitButton).toBeEnabled();
    });
});
