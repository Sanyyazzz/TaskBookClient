import { apiRequest } from '../../apiRequest';

export const changeProviderMutation = (payload) => {

    const query =
        `mutation ChangeProvider($provider: String!){
            service{
                changeProvider(provider: $provider)
            }
        }`;

    const variables = {
        provider: payload
    }

    return apiRequest(query, variables);
}