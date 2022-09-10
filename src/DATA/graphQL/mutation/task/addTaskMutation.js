import { apiRequest } from '../../apiRequest';

export const addTaskMutation = (payload) => {

    const query =
        `mutation AddTask($task: TaskInputModel!){
            task{
                addTask(task: $task){
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
        task: {...payload}
    }

    return apiRequest(query, variables);
}