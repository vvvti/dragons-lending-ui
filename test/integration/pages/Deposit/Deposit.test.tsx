import React from 'react';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Deposit} from '../../../../src/pages/Deposit/Deposit';

describe('Deposit', () => {
    beforeEach(() => {
        renderWithRouter(<Deposit />);
    });

    it('submit button disabled on invalid values', async () => {
        const amountInput = screen.getByLabelText(/gbp/i);
        userEvent.clear(amountInput);
        await userEvent.type(amountInput, '1000000000');

        const accountInput = screen.getByLabelText(/account/i);
        userEvent.clear(accountInput);
        await userEvent.type(accountInput, '11 111 11111');

        const submitButton = screen.getByRole('button', {name: /add/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });
    it('amount should display error on invalid values', async () => {
        const amountInput = screen.getByLabelText(/gbp/i);
        userEvent.clear(amountInput);
        await userEvent.type(amountInput, '1000000000');

        fireEvent.blur(amountInput);
        await screen.findByText(/you can select max/i);
    });
});
