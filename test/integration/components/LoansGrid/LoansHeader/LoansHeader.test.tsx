import React from 'react';
import {screen} from '@testing-library/react';
import {OffersHeader} from '../../../../../src/components/OffersGrid/OffersHeader/OffersHeader';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('OffersHeader', () => {
    it('renders component', async () => {
        renderWithRouter(<OffersHeader />);

        expect(screen.getByRole('heading', {name: /active/i})).toBeInTheDocument();
    });
});
