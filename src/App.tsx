import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {GlobalStyle} from './styles/GlobalStyle';
import {Routes} from './routes/Routes';

export const App = () => {
    const history = createBrowserHistory();

    return (
        <StylesProvider injectFirst>
            <Router history={history}>
                <CssBaseline />
                <GlobalStyle />
                <Routes />
            </Router>
        </StylesProvider>
    );
};
