import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {getAllTaskApiRequest} from "../../../DATA/reducers/tasksSlice";
import {Row, Select} from "antd";
import {FilterOutlined, CloseOutlined} from "@ant-design/icons";

const SortCategoryInput = () => {

    const categoriesList = useSelector(store => store.categories.categories);

    const dispatch = useDispatch();
    const [category,setCategory] = useState(null);

    const onChangedCategorySort = (e) => {
        setCategory(e.target.value);
    }

    const onSubmitSort = () => {
        category
            ? dispatch(getAllTaskApiRequest(category))
            : dispatch(getAllTaskApiRequest());
    }

    const onCancelSort = () => {
        setCategory(null);
        dispatch(getAllTaskApiRequest());
    }

    return(
        <>
            <Row
                style={{
                    justifyContent:"end",
                    alignItems:"center",
                    marginBottom:"20px"
            }}
            >
                {category && <CloseOutlined onClick={onCancelSort} style={{marginRight:"10px"}} />}
                <Select
                    style={{border:"0", backgroundColor:"transparent", width:"100px", marginRight:"10px"}}
                    onChange={onChangedCategorySort}
                >
                    <option key={0} value={null}></option>
                    {categoriesList.map(category=>
                        <option key={category.id} value={category.id}>{category.category}</option>
                    )}
                </Select>
                <FilterOutlined style={{fontSize:"20px"}} onClick={onSubmitSort}/>
            </Row>
        </>
    )
}

export default SortCategoryInput;