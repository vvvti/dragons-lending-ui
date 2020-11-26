import {useCallback, useState} from 'react';
import {useAuthContext} from '../context/auth-context';
import {deleteProposalItem, getProposalsList, postProposalsList} from '../api/proposals';
import {Proposals} from '../helpers/types';

export const useProposals = () => {
    const [proposalsList, setProposalsList] = useState<Proposals[]>([]);
    const {tokenStorage} = useAuthContext();

    const getProposals = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        if (tokenStorage) {
            const response = await getProposalsList(config);
            setProposalsList(response.data);
            console.log('getProposalsList', response.data);
        }
    }, [tokenStorage]);

    const postProposals = useCallback(
        async values => {
            const config = {
                headers: {'x-authorization': tokenStorage},
            };

            if (tokenStorage) {
                const response = await postProposalsList(values, config);
                setProposalsList(response.data);
                console.log('postProposalsList', response.data);
            }
        },
        [tokenStorage],
    );

    const deleteProposals = useCallback(async () => {
        const config = {
            headers: {'x-authorization': tokenStorage},
        };

        const id = '700d3b8a-7264-44e9-aa9f-0231a65516ac';

        if (tokenStorage) {
            const response = await deleteProposalItem(id, config);
            setProposalsList(response.data);
            console.log('postProposalsList', response.data);
        }
    }, [tokenStorage]);

    return {
        proposalsList,
        getProposals,
        postProposals,
        deleteProposals,
    };
};
