import {React} from "react";
import {useDispatch} from "react-redux";
import {deleteCategoryApiRequest} from "../../../DATA/reducers/categoriesSlice";
import {Button, Card, Col, Row} from "antd";
import {CheckCircleOutlined, DeleteOutlined, EditOutlined, StarFilled, StarOutlined} from "@ant-design/icons";

const RowOfCategoryList = (props) => {
    const dispatch = useDispatch();

    const onDeleteCategory = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Delete category: "+ props.category.category +"? All task with this category will be delete")){
            dispatch(deleteCategoryApiRequest(props.category.id));
        }
    }

    const info =
        <>
            <Row style={{
                alignItems:"center"
            }}>
                <Col>
                    <Row style={{
                        fontSize:"16px"
                    }}>
                        {props.category.category}
                    </Row>
                </Col>
            </Row>
        </>;

    const buttons =
        <Row>
            <Button
                type="button"
                onClick={onDeleteCategory}
                style={{marginRight:"10px"}}
            >
                <DeleteOutlined />
            </Button>
        </Row>;


    return(
        <tr key={props.category.id}>
            <Card
                style={{
                    width:"800px",
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

export default RowOfCategoryList;