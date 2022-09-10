import { apiRequest } from '../../apiRequest';

export const editTaskMutation = (payload) => {

    const query =
        `mutation EditTask($id: Int!, $task: TaskInputModel!){
            task{
                editTask(id: $id, task: $task){
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
        id: payload.id,
        task: {
            taskDesc:payload.taskDesc,
            categoryID:payload.categoryID,
            deadLine:payload.deadLine,
            important:payload.important,
            completed:payload.completed
        }
    }

    return apiRequest(query, variables);
}