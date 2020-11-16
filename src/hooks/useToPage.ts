import {useHistory} from 'react-router';
import {ROUTES} from '../helpers/routes';

export const useToMain = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: ROUTES.LOANGRID,
        };
        history.push(location);
    };

    return {goToMain};
};

export const useToLogin = () => {
    const history = useHistory();

    const goToLogin = () => {
        const location = {
            pathname: ROUTES.LOGIN,
        };
        history.push(location);
    };

    return {goToLogin};
};
