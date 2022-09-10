import { apiRequest } from '../../apiRequest';

export const deleteTaskMutation = (payload) => {

    const query =
        `mutation DeleteTask($id: Int!){
            task{
                deleteTask(id: $id)
            }
        }`;

    const variables = {
        id: payload
    }

    return apiRequest(query, variables);
}