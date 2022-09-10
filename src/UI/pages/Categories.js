import {React} from "react";
import CategoriesList from "../component/Categories/CategoriesList";
import InputCategory from "../component/Categories/InputCategory";
import {Link} from "react-router-dom";
import {Row} from "antd";
import {SwapLeftOutlined} from "@ant-design/icons";

const Categories = () => {
    return(
        <div style={{width:"800px", margin:"0 auto"}}>
            <Row style={{marginBottom:"10px", fontSize: "16px"}}>
                <Link to="/"><SwapLeftOutlined /> Tasks</Link>
            </Row>
            <InputCategory />
            <CategoriesList />
        </div>
    )
}

export default Categories;