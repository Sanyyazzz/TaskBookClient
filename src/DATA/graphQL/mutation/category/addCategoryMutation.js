import { apiRequest } from '../../apiRequest';

export const addCategoryMutation = (payload) => {

    const query =
        `mutation AddCategory($category: CategoryInput!){
            category{
                addCategory(category: $category){
                     id
                     category
                }
            }
        }`;

    const variables = {
        category: {...payload}
    }

    return apiRequest(query, variables);
}