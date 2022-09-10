import { createSlice, createAction} from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks:[{
                id: 0,
                taskDesc: "Build house",
                deadLine: null,
                category: null,
                completed: false,
                important: true
            },
            {
                id: 1,
                taskDesc: "Learn homework (Ex.5, p.45)",
                deadLine: "2022-05-04",
                category: "Home",
                completed: false,
                important: false
            }
        ]
    },

    reducers: {
        loadAllTask (state, action) {
            state.tasks = action.payload;
            return state;
        },

        addTask (state, action){
            state.tasks.push(action.payload);
        },

        editTask (state, action){
            const task = action.payload;
            const index = state.tasks.findIndex(el => el.id === task.id);
            state.tasks[index]=task;
        },

        deleteTask (state, action){
            const id = action.payload;
            const index = state.tasks.findIndex(el => el.id === id);
            state.tasks.splice(index,1);
        },

        completed (state, action){
            const id = action.payload;
            const index = state.tasks.findIndex(el => el.id === id);
            state.tasks[index].completed = true;
            alert("Task done!");
        }
    }
})

export const { loadAllTask, addTask, editTask, deleteTask, completed } = tasksSlice.actions;

export const getAllTaskApiRequest = createAction('task/getAll/api/request');
export const addTaskApiRequest = createAction('task/addTask/api/request');
export const editTaskApiRequest = createAction('task/editTask/api/request');
export const deleteTaskApiRequest = createAction('task/deleteTask/api/request');
export const completeTaskApiRequest = createAction('task/completeTask/api/request');

export default tasksSlice.reducer;