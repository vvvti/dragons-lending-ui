import React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';
import {AuthRouteProps} from '../../helpers/types';
import {NONAUTHROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const AuthRoute: React.FC<AuthRouteProps> = ({children, Component, path, exact = false}): JSX.Element => {
    const {tokenStorage} = useAuthContext();
    const message = 'Please log in to view this page';

    return (
        <Route
            exact={exact}
            path={path}
            component={(props: RouteComponentProps) =>
                tokenStorage ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: NONAUTHROUTES.LOGIN,
                            state: {
                                message,
                                requestedPath: path,
                            },
                        }}
                    />
                )
            }
        >
            {children}
        </Route>
    );
};
