import {changeProviderApiRequest} from "../../../DATA/reducers/providerSlice";
import {useDispatch, useSelector} from "react-redux";
import {React} from "react";
import {Button, Row} from "antd";

const ProviderSwitch = () => {
    const provider = useSelector(store=>store.providers.providers);

    const dispatch = useDispatch();
    const onChangeProvider = (provider) => {
        dispatch(changeProviderApiRequest(provider));
    }

    switch (provider.provider){
        case "sql":
            return(
                <Row style={{width: "120px", justifyContent: "space-between"}}>
                    <Button
                        key="0"
                        onClick={()=>onChangeProvider("sql")}
                        type="primary"
                    >SQL</Button>
                    <Button
                        key="1"
                        onClick={()=>onChangeProvider("xml")}
                        type="default"
                    >XML</Button>
                </Row>
            )
        case "xml":
            return(
                <Row style={{width: "120px", justifyContent: "space-between"}}>
                    <Button
                        onClick={()=>onChangeProvider("sql")}
                        type="default"
                    >SQL</Button>
                    <Button
                        onClick={()=>onChangeProvider("xml")}
                        type="primary"
                    >XML</Button>
                </Row>
            )
    }
}

export default ProviderSwitch;