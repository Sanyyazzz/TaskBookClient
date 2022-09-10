import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {completed, completeTaskApiRequest, deleteTask, deleteTaskApiRequest} from "../../../DATA/reducers/tasksSlice";
import RowEdit from "./RowEdit";
import {getTimeFromString} from "../../../function/getTimeFromString";
import {Button, Card, Col, Row} from "antd";
import {CheckCircleOutlined, DeleteOutlined, EditOutlined, StarOutlined, StarFilled} from "@ant-design/icons";

const RowTask = (props) => {
    const dispatch = useDispatch();

    const onCompleteTask = () => {
        dispatch(completeTaskApiRequest(props.task.id));
    }

    const onDeleteTask = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Delete task: "+ props.task.taskDesc +"?")){
            dispatch(deleteTaskApiRequest(props.task.id));
        }
    }

    const onEditTask = () => {
        props.onEditStatus();
    }

    const onEditImportantStatus = (flag) => {

    }

    const info =
        <>
            <Row
                style={{
                alignItems:"center"
            }}>
                <Col style={{
                    width:"30px",
                    marginRight:"20px"
                }}>
                    <div>
                        {props.task.important
                            ?
                            <Button
                                style={{border:"0"}}
                                onClick={()=>onEditImportantStatus(false)}
                            ><StarFilled style={{fontSize:"20px"}}/></Button>
                            :
                            <Button
                                style={{border:"0"}}
                                onClick={()=>onEditImportantStatus(true)}
                            ><StarOutlined style={{fontSize:"20px"}}/></Button>
                        }
                    </div>
                </Col>
                <Col>
                    <Row style={{
                        fontSize:"16px"
                    }}>
                        {props.task.taskDesc}
                    </Row>
                    <Row style={{
                        color:"grey",
                        marginTop:"5px"
                    }}>
                        {props.task.category
                            ? <>{props.task.category} {props.task.deadLine && <>• {getTimeFromString(props.task.deadLine)}</>}</>
                            : <>{getTimeFromString(props.task.deadLine)}</>
                        }
                    </Row>
                </Col>
            </Row>
        </>;

    const buttons = props.task.completed ?
        <Button
            type="button"
            onClick={onDeleteTask}
            style={{marginRight:"10px"}}
        >
            <DeleteOutlined style={{color:"1890FF"}} />
        </Button>
        :
        (<Row>
            <Button
                type="button"
                onClick={onCompleteTask}
                style={{marginRight:"10px"}}
            >
                <CheckCircleOutlined style={{color:"1890FF"}} />
            </Button>
            <Button
                type="button"
                onClick={onDeleteTask}
                style={{marginRight:"10px"}}
            >
                <DeleteOutlined />
            </Button>
            <Button
                type="button"
                onClick={onEditTask}
                style={{marginRight:"10px"}}
            >
                <EditOutlined />
            </Button>
        </Row>);

    return (
        <tr key={props.task.id}>
            <Card
                className={props.task.completed && "completeTask"}
                style={{
                    width:"1200px",
                    marginBottom:"10px",
                    borderRadius:"5px"
                }}
            >
                <Row style={{
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                    <div
                        className={props.task.completed && "completeTask"}
                    >{info}</div>
                    <div>{buttons}</div>
                </Row>
            </Card>
        </tr>
    )
}

export default RowTask;