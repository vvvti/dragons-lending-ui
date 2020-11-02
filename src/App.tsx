import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Home} from './components/Home/Home';

export const App = () => {
    return (
        <StylesProvider injectFirst>
            <CssBaseline />
            <Home />
        </StylesProvider>
    );
};
