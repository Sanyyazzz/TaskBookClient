import { apiRequest } from '../../apiRequest';

export const getAllTaskQuery = (payload) => {
    const query =
        `query($sortParam: String){
            task{
                getAll(sortParam: $sortParam){
                     id
                     taskDesc 
                     category 
                     deadLine 
                     important 
                     completed
                }
            }
        }`;

    const variables = {
        sortParam: payload
    }

    return apiRequest(query, variables);
}