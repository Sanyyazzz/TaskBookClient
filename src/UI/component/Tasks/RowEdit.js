import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTask, editTaskApiRequest, getAllTaskApiRequest} from "../../../DATA/reducers/tasksSlice";
import {getTaskByIdQuery} from "../../../DATA/graphQL/query/task/getTaskByIdQuery";
import {apiRequest} from "../../../DATA/graphQL/apiRequest";
import {getCategoryIdByName} from "../../../function/getCategoryIdByName";
import {Button, Card, Col, DatePicker, Dropdown, Input, Row, Select, Space} from "antd";
import {
    CalendarOutlined,
    StarFilled,
    StarOutlined,
    SaveOutlined,
    CloseSquareOutlined
} from "@ant-design/icons";
import moment from "moment";



const RowEdit = (props) => {
    const categoriesList = useSelector(store => store.categories.categories);

    const [taskDesc, setTaskDesc] = useState()
    const [deadLine, setDeadline] = useState()
    const [category, setCategory] = useState()
    const [important, setImportantStatus] = useState()

    const onTaskDescChanged = e => setTaskDesc(e.target.value)
    const onDeadlineChanged = e => setDeadline(e.target.value)
    const onCategoryChanged = e => setCategory(e)
    const onImportantStatusChanged = e => setImportantStatus(!important)

    const dispatch = useDispatch();

    useEffect(()=>{
        getTaskByIdQuery(props.task.id)
            .then(data => {
               setTaskDesc(data.data.task.getById.taskDesc);
               setDeadline(moment(data.data.task.getById.deadLine));
               setImportantStatus(data.data.task.getById.important);
               setCategory(
                   getCategoryIdByName(categoriesList,data.data.task.getById.category)
               );
            })
    }, [])

    const onSaveEdit = () => {
        let id = props.task.id;
        dispatch(editTaskApiRequest({
            id,
            taskDesc,
            deadLine: deadLine.format("YYYY-MM-DDTHH:mm"),
            categoryID:parseInt(category),
            important
        }));
        props.onSaveStatus();
        dispatch(getAllTaskApiRequest());
    }

    const onCancelEdit = () => {
        props.onSaveStatus();
    }

    const info =
        <>
            <Row style={{
                alignItems:"start"
            }}>
                <Col style={{
                    width:"30px",
                    marginRight:"20px"
                }}>
                    <div>
                        {important
                            ?
                            <Button
                                style={{border:"0"}}
                                onClick={()=>onImportantStatusChanged()}
                            ><StarFilled style={{fontSize:"20px"}}/></Button>
                            :
                            <Button
                                style={{border:"0"}}
                                onClick={()=>onImportantStatusChanged()}
                            ><StarOutlined style={{fontSize:"20px"}}/></Button>
                        }
                    </div>
                </Col>
                <Col>
                    <Row style={{
                        fontSize:"16px"
                    }}>
                        <Space>
                            <Input
                                value={taskDesc}
                                type="text"
                                id="taskDesc"
                                name="taskDesc"
                                placeholder="Task"
                                onChange={onTaskDescChanged}
                                style={{
                                    width:"600px"
                                }}
                            />
                            <Select
                                onChange={onCategoryChanged}
                                value={category}
                                style={{
                                    width:"150px"
                                }}>
                                <option key={0} value={null}></option>
                                {categoriesList.map(category=>
                                    <option key={category.id} value={category.id}>{category.category}</option>
                                )}
                            </Select>
                        </Space>
                    </Row>
                    <Row style={{
                        marginTop:"10px"
                    }}>
                        <Button style={{backgroundColor:"transparent", border:"0"}}>
                            <Dropdown
                                overlay={
                                    <div>
                                        <DatePicker
                                            showTime
                                            value={deadLine}
                                            type="datetime-local"
                                            id="deadLine"
                                            name="deadLine"
                                            onChange={onDeadlineChanged}
                                        />
                                    </div>
                                }
                                placement={"bottomLeft"}
                            >
                                <CalendarOutlined key="setting" style={{ fontSize: '22px' }}/>
                            </Dropdown>
                        </Button>
                        <Button
                            shape="round"
                            style={{marginRight:"10px"}}
                            onClick={()=>setDeadline(moment().hour(23).minute(0))}
                        >Today</Button>
                        <Button
                            shape="round"
                            style={{marginRight:"10px"}}
                            onClick={()=>setDeadline(moment().add(1,"days"))}
                        >Tomorrow</Button>
                    </Row>
                </Col>
            </Row>
        </>;

    const buttons =
        <Row>
            <Button
                type="button"
                style={{marginRight:"10px"}}
                onClick={()=>onSaveEdit()}
            >
                <SaveOutlined style={{color:"1890FF"}} />
            </Button>
            <Button
                type="button"
                style={{marginRight:"10px"}}
                onClick={()=>onCancelEdit()}
            >
                <CloseSquareOutlined />
            </Button>
        </Row>;

    return (
        <tr key={props.task.id}>
            <Card
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
                    <div>{info}</div>
                    <div>{buttons}</div>
                </Row>
            </Card>
        </tr>
    )
}

export default RowEdit;