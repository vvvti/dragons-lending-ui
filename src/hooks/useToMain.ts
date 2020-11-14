import {useHistory} from 'react-router';

export const useToMain = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: '/loangrid',
        };
        history.push(location);
    };

    return {goToMain};
};
