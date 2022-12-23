import {React} from 'react';
import InputTask from "../component/Tasks/InputTask";
import TaskList from "../component/Tasks/TaskList";
import SortCategoryInput from "../component/Tasks/SortCategoryInput";

const DashBoard = () => {
    return(
        <>
            <InputTask/>
            <SortCategoryInput />
            <TaskList/>
        </>
    )
}

export default DashBoard;