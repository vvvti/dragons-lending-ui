import React from 'react';
import {Navbar} from '../../../../src/components/Navbar/Navbar';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';

describe('Navbar', () => {
    it('renders component', async () => {
        renderWithRouter(<Navbar />);

        expect(screen.getByRole('link', {name: /about/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /rules/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /login/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /contact/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /auctions/i})).toBeInTheDocument();
    });
});
