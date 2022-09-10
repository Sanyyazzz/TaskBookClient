import { apiRequest } from '../../apiRequest';

export const getTaskByIdQuery = (payload) => {
    const query =
        `query($id: Int!){
            task{
                getById(id: $id){
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
        id: payload
    }

    return apiRequest(query, variables);
}