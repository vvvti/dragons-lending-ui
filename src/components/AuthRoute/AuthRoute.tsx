import React from 'react';
import {RouteComponentProps, Route, Redirect} from 'react-router-dom';
import {AuthRouteProps} from '../../helpers/types';
import {NONAUTHROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const AuthRoute = ({Component, path, exact = false}: AuthRouteProps): JSX.Element => {
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
        />
    );
};
