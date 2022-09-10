import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from "./epics/rootEpic";
import categoriesReducer from "./reducers/categoriesSlice";
import providerReducer from "./reducers/providerSlice";

const epicMiddleware = createEpicMiddleware();

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
        providers: providerReducer
    },
    middleware: [epicMiddleware]
})

epicMiddleware.run(rootEpic);