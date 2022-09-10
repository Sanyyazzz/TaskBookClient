import React, {useState, useEffect} from "react";
import RowEdit from "./RowEdit";
import RowTask from "./RowTask";

const RowOfTaskList = (props) => {
    const[stateRow,setState]=useState('rowTask');

    const onEditStatus = () => {
        if(props.count > 0){ alert("You edit another task"); }
        else{
            props.setCount(1);
            setState('rowEdit');
        }
    }

    const onSaveStatus = () => {
        setState('rowTask');
        props.setCount(0);
    }

    switch(stateRow){

        case 'rowTask': return <RowTask task={props.task} onEditStatus={onEditStatus} />;

        case 'rowEdit': return <RowEdit task={props.task} onSaveStatus={onSaveStatus} />;

        default: return <tr key={props.task.id}></tr>;
    }
}

export default RowOfTaskList;