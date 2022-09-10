import {combineEpics} from 'redux-observable';
import {mergeMap, filter, map} from 'rxjs/operators';
import {
    addTask,
    addTaskApiRequest, completed, completeTaskApiRequest,
    deleteTask,
    deleteTaskApiRequest, editTask, editTaskApiRequest,
    getAllTaskApiRequest,
    loadAllTask
} from "../reducers/tasksSlice";
import {from} from "rxjs";
import {getAllTaskQuery} from "../graphQL/query/task/getAllTaskQuery";
import {addTaskMutation} from "../graphQL/mutation/task/addTaskMutation";
import {deleteTaskMutation} from "../graphQL/mutation/task/deleteTaskMutation";
import {editTaskMutation} from "../graphQL/mutation/task/editTaskMutation";
import {completeTaskMutation} from "../graphQL/mutation/task/completeTaskMutation";

const getAllTaskEpic = action$ => {
    return action$.pipe(
        filter(getAllTaskApiRequest.match),
        mergeMap((action)=>{
            return from(getAllTaskQuery(action.payload))
                .pipe(
                    map(data=>{
                        const tasks = data.data.task.getAll;
                        tasks && tasks.forEach((task)=>{if(task.deadLine)task.deadLine = new Date(task.deadLine)});
                        return loadAllTask(tasks);
                    })
                );
        })
    )
}

const addTaskEpic = action$ => {
    return action$.pipe(
        filter(addTaskApiRequest.match),
        mergeMap((action)=>{
            return from(addTaskMutation(action.payload))
                .pipe(
                    map(data=>{
                        const task = data.data.task.addTask;
                        if(task.deadLine)task.deadLine = new Date(task.deadLine);
                        return addTask(task);
                    })
                );
        })
    )
}

const editTaskEpic = action$ => {
    return action$.pipe(
        filter(editTaskApiRequest.match),
        mergeMap((action)=>{
            return from(editTaskMutation(action.payload))
                .pipe(
                    map(data=>{
                        const task = data.data.task.editTask;
                        if(task.deadLine)task.deadLine = new Date(task.deadLine);
                        return editTask(task);
                    })
                );
        })
    )
}

const deleteTaskEpic = action$ => {
    return action$.pipe(
        filter(deleteTaskApiRequest.match),
        mergeMap((action)=>{
            return from(deleteTaskMutation(action.payload))
                .pipe(
                    map(data=>{
                        const id = data.data.task.deleteTask;
                        return deleteTask(id);
                    })
                );
        })
    )
}

const completeTaskEpic = action$ => {
    return action$.pipe(
        filter(completeTaskApiRequest.match),
        mergeMap((action)=>{
            return from(completeTaskMutation(action.payload))
                .pipe(
                    map(data=>{
                        const id = data.data.task.completeTask.id;
                        return completed(id);
                    })
                );
        })
    )
}

const taskEpic = combineEpics(getAllTaskEpic, addTaskEpic, editTaskEpic, deleteTaskEpic, completeTaskEpic);

export default taskEpic;