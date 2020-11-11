import React from 'react';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {InvestForm} from '../../../../../src/components/LoansGrid/InvestForm/InvestForm';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('Invest Form', () => {
    test('submit button disabled on invalid values', async () => {
        renderWithRouter(<InvestForm />);

        const investAmountInput = screen.getByLabelText(/invest amount/i);
        userEvent.clear(investAmountInput);
        await userEvent.type(investAmountInput, '-300');

        const investRateInput = screen.getByLabelText(/invest rate/i);
        userEvent.clear(investRateInput);
        await userEvent.type(investRateInput, '-5');

        const submitButton = screen.getByRole('button', {name: /invest/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });
    // test('invest rate should throw error on invalid values', async () => {
    //     renderWithRouter(<Login/>);
    //
    //     const emailInput = screen.getByLabelText(/invest rate/i);
    //     userEvent.clear(emailInput);
    //     await userEvent.type(emailInput, 'test.pl');
    //
    //     fireEvent.blur(emailInput);
    //     await screen.findByText('email must be a valid email');
    // });
    // test('password should throw error on invalid values', async () => {
    //     renderWithRouter(<Login/>);
    //
    //     const passwordInput = screen.getByLabelText(/password/i);
    //     userEvent.clear(passwordInput);
    //     await userEvent.type(passwordInput, 'pass');
    //
    //     fireEvent.blur(passwordInput);
    //     await screen.findByText('Password should contain at last 8 character');
    // });
});
