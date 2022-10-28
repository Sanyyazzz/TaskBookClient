import {React, useState} from 'react';
import RowTask from "./RowOfTaskList";
import {useSelector} from "react-redux";

const TaskList = () => {
    const[countOfActiveEdit,setCountOfActiveEdit]=useState(0);

    const tasksObj = useSelector(store=>store.tasks.tasks);

    const scheduleTasks = tasksObj.map((task) =>{
            return <RowTask key={task.id} task={task} count={countOfActiveEdit} setCount={setCountOfActiveEdit} />
        }
    )

    return(
        <div className="tableList">
            {scheduleTasks.length == 0
                ?
                <div className="plug">
                    <img src="https://icon-library.com/images/empty-icon/empty-icon-2.jpg" width={50}/> No schedule task right now
                </div>
                :
                <table>
                    <tbody>
                        {scheduleTasks}
                    </tbody>
                </table>}
        </div>
    )
}

export default TaskList;