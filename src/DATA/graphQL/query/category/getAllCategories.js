import { apiRequest } from '../../apiRequest';

export const getAllCategoriesQuery = () => {
    const query =
        `query{
            category{
                getAll{
                     id
                     category
                }
            }
        }`;

    return apiRequest(query);
}