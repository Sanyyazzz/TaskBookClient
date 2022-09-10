import { apiRequest } from '../../apiRequest';

export const completeTaskMutation = (payload) => {

    const query =
        `mutation Complete($id: Int!){
            task{
                completeTask(id: $id){
                    id
                }
            }
        }`;

    const variables = {
        id: payload
    }

    return apiRequest(query, variables);
}