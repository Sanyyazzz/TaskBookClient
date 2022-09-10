import { apiRequest } from '../../apiRequest';

export const getProviderNameQuery = (payload) => {
    const query =
        `query{
            service{
                getProvider
            }
        }`;

    const variables = {

    }

    return apiRequest(query, variables);
}