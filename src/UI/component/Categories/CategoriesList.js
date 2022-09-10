import {React} from "react";
import {useSelector} from "react-redux";
import RowOfCategoryList from "./RowOfCategoryList";

const CategoriesList = () => {

    const categoriesItems = useSelector(store=>store.categories.categories);

    const categoryRows = categoriesItems.map((category)=>
        <RowOfCategoryList key={category.id} category={category} />
    )

    return(
        <div>
            {categoryRows.length == 0
                ?
                <div className="plug">
                    <img src="https://icon-library.com/images/empty-icon/empty-icon-2.jpg" width={50}/>
                    No category right now
                </div>
                :
            <table>
                <tbody>
                    {categoryRows}
                </tbody>
            </table>}
        </div>
    )
}

export default CategoriesList;