import { apiRequest } from '../../apiRequest';

export const deleteCategoryMutation = (payload) => {

    const query =
        `mutation DeleteCategory($id: Int!){
            category{
                deleteCategory(id: $id)
            }
        }`;

    const variables = {
        id: payload
    }

    return apiRequest(query, variables);
}