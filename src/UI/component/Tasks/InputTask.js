import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTaskApiRequest} from "../../../DATA/reducers/tasksSlice";
import {Button, Card, Col, DatePicker, Dropdown, Input, Row, Select, Space} from "antd";
import {PlusOutlined, CalendarOutlined} from "@ant-design/icons";
import moment from 'moment';
import {Link} from "react-router-dom";
import {Option} from "antd/es/mentions";

const InputTask = () => {
    const categoriesList = useSelector(store => store.categories.categories);

    const [taskDesc, setTaskDesc] = useState(null)
    const [deadLine, setDeadline] = useState(null)
    const [category, setCategory] = useState('')

    const dispatch = useDispatch();
    const onAddTask = () => {
        if(!taskDesc){
            alert("Task is null!");
        }else{
            dispatch(addTaskApiRequest({
                taskDesc,
                deadLine:deadLine.format("YYYY-MM-DDTHH:mm"),
                categoryID: parseInt(category),
                completed: false,
                important: false
            }));

            setTaskDesc('');
            setDeadline(null);
            setCategory('');
        }
    }

    const onTaskDescChanged = e => setTaskDesc(e.target.value)
    const onDeadlineChanged = e => setDeadline(e)
    const onCategoryChanged = e => setCategory(e)

    return (
        <>
            <Card
                style={{
                    width:"1200px",
                    marginBottom:"0px",
                    borderRadius:"5px 5px 0px 0px"
                }}
            >
                <Row style={{
                    alignItems:"center"
                }}>
                    <Col span={1}>
                        <PlusOutlined style={{ fontSize: '22px' }}/>
                    </Col>
                    <Col>
                        <Row style={{
                            width:"1100px",
                            alignItems:"center"
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
                                        width:"900px"
                                    }}
                                />
                                <Select
                                    onChange={onCategoryChanged}
                                    value={category}
                                    style={{
                                    width:"150px"
                                }}>
                                    <Option key={0} value={''} children={''}></Option>
                                    {categoriesList.map(category=>
                                        <Option key={category.id} value={category.id} children={category.category}></Option>
                                    )}
                                </Select>
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Row
                style={{
                    justifyContent:"space-between",
                    alignItems:"center",
                    height:"50px",
                    marginBottom:"20px",
                    backgroundColor:"lightgrey",
                    borderRadius:"0 0 5px 5px"
                }}>
                <Row style={{
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginLeft:"50px",
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
                <Row style={{
                    marginRight:"20px",
                    alignItems: "center"
                }}>
                    <Link to="/category" style={{marginRight:"10px"}}>Categories</Link>
                    <Button onClick={()=>onAddTask()} type="primary">Add</Button>
                </Row>
            </Row>
        </>
    )
}

export default InputTask;