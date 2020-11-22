import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import {CloseButton} from '../../../../src/components/CloseButton/CloseButton';

describe('CloseButton', () => {
    it('renders component', async () => {
        renderWithRouter(<CloseButton />);

        expect(screen.getByText('X')).toBeInTheDocument();
    });
});
