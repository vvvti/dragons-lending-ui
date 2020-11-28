import {useHistory} from 'react-router';
import {AUTHROUTES, NONAUTHROUTES} from '../helpers/routes';

export const useToPage = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: NONAUTHROUTES.AUCTIONSGRID,
        };
        history.push(location);
    };

    const goToUserAccount = () => {
        const location = {
            pathname: AUTHROUTES.USERACCOUNT,
        };
        history.push(location);
    };

    return {goToMain, goToUserAccount};
};
