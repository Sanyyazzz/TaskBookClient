import { combineEpics } from 'redux-observable';
import taskEpic from './taskEpic';
import categoryEpic from "./categoryEpic";
import {providerEpic} from "./providerEpic";

export const rootEpic = combineEpics(
    taskEpic,
    categoryEpic,
    providerEpic
);