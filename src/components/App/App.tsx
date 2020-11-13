import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '../../routes/Routes';
import {Navbar} from '../Navbar/Navbar';
import {GlobalStyle} from '../../styles/GlobalStyle';
import {AuthContextProvider} from '../../context/auth-context';

export const App: React.FC = () => {
    return (
        <StylesProvider injectFirst>
            <BrowserRouter>
                <AuthContextProvider>
                    <CssBaseline />
                    <GlobalStyle />
                    <Navbar />
                    <Routes />
                </AuthContextProvider>
            </BrowserRouter>
        </StylesProvider>
    );
};
