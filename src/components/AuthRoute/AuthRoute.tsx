import React from 'react';
import {Route, RouteComponentProps} from 'react-router-dom';
import {AuthRouteProps} from '../../helpers/types';

import {useAuthContext} from '../../context/auth-context';
import {NonAuthorized} from '../../pages/NonAuthorized/NonAuthorized';

export const AuthRoute: React.FC<AuthRouteProps> = ({children, Component, path, exact = false}): JSX.Element => {
    const {tokenStorage} = useAuthContext();

    if (!tokenStorage) {
        return <NonAuthorized />;
    }

    return (
        <Route exact={exact} path={path} component={(props: RouteComponentProps) => <Component {...props} />}>
            {children}
        </Route>
    );
};
