import React from 'react';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Login} from '../../../../src/pages/Login/Login';

describe('Login', () => {
    test('submit button disabled on invalid values', async () => {
        renderWithRouter(<Login />);

        const emailInput = screen.getByLabelText(/email/i);
        userEvent.clear(emailInput);
        await userEvent.type(emailInput, 'test.pl');

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.clear(passwordInput);
        await userEvent.type(passwordInput, 'password1234');

        const submitButton = screen.getByRole('button', {name: /login/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });
    test('email should display error on invalid values', async () => {
        renderWithRouter(<Login />);

        const emailInput = screen.getByLabelText(/email/i);
        userEvent.clear(emailInput);
        await userEvent.type(emailInput, 'test.pl');

        fireEvent.blur(emailInput);
        await screen.findByText('email must be a valid email');
    });
    test('password should display error on invalid values', async () => {
        renderWithRouter(<Login />);

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.clear(passwordInput);
        await userEvent.type(passwordInput, 'pass');

        fireEvent.blur(passwordInput);
        await screen.findByText('Password should contain at last 8 character');
    });
});
