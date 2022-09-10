import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCategoryApiRequest} from "../../../DATA/reducers/categoriesSlice";
import {Button, Card, Col, Input, Row, Select, Space} from "antd";

const InputCategory = () => {
    const [categoryName, setCategoryName] = useState();

    const onChangeCategoryName = (e) => setCategoryName(e.target.value);

    const dispatch = useDispatch();

    const onAddCategory = () => {
        if(!categoryName){
            alert("Category name is null!");
        }else{
            dispatch(addCategoryApiRequest({
                category:categoryName
                }));
            setCategoryName('');
        }
    }

    return(
        <>
            <Card
                style={{
                    width:"800px",
                    marginBottom:"10px",
                    borderRadius:"5px"
                }}
            >
                <Row style={{
                    alignItems:"center"
                }}>
                    <Col>
                        <Row style={{
                            width:"700px",
                            alignItems:"center"
                        }}>
                            <Space>
                                <Input
                                    value={categoryName}
                                    type="text"
                                    id="categoryName"
                                    name="categoryName"
                                    placeholder="Category"
                                    onChange={onChangeCategoryName}
                                    style={{
                                        width:"680px"
                                    }}
                                />
                                <Button type="primary" onClick={onAddCategory}>Add</Button>
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default InputCategory;