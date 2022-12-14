import './UI/styles/App.css';
import Dashboard from "./UI/pages/Dashboard";
import Categories from "./UI/pages/Categories"
import {Route, Link, Routes } from 'react-router-dom';
import {React, useEffect} from "react";
import {getAllTaskApiRequest} from "./DATA/reducers/tasksSlice";
import {getAllCategoryApiRequest} from "./DATA/reducers/categoriesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getProviderNameApiRequest} from "./DATA/reducers/providerSlice";
import ProviderSwitch from "./UI/component/Provider/providerSwitch";
import 'antd/dist/antd.css';
import {PageHeader} from "antd";

function App() {
    const dispatch = useDispatch();
    const provider = useSelector(store=>store.providers.providers);
    const tasks = useSelector(store=>store.tasks.tasks);
    const categories = useSelector(store=>store.categories.categories);

    useEffect(() => {
        debugger
        dispatch(getAllTaskApiRequest());
        dispatch(getAllCategoryApiRequest());
    }, [provider])

  return (
    <div className="App">
        <PageHeader
            title={"TodoList"}
            extra={[
                <div key={0}>Storage</div>,
                <ProviderSwitch key={1}/>
            ]}
        />
        <div className="content">
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/category" element={<Categories/>} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
