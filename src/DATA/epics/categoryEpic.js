import {combineEpics} from 'redux-observable';
import {mergeMap, filter, map} from 'rxjs/operators';
import {from} from "rxjs";
import {getAllCategoriesQuery} from "../graphQL/query/category/getAllCategories";
import {
    addCategory,
    addCategoryApiRequest, deleteCategory, deleteCategoryApiRequest,
    getAllCategoryApiRequest,
    loadAllCategory
} from "../reducers/categoriesSlice";
import {addCategoryMutation} from "../graphQL/mutation/category/addCategoryMutation";
import {deleteCategoryMutation} from "../graphQL/mutation/category/deleteCategoryMutation";

const getAllCategoryEpic = action$ => {
    return action$.pipe(
        filter(getAllCategoryApiRequest.match),
        mergeMap((action)=>{
            return from(getAllCategoriesQuery())
                .pipe(
                    map(data=>{
                        const categories = data.data.category.getAll;
                        return loadAllCategory(categories);
                    })
                );
        })
    )
}

const addCategoryEpic = action$ => {
    return action$.pipe(
        filter(addCategoryApiRequest.match),
        mergeMap((action)=>{
            return from(addCategoryMutation(action.payload))
                .pipe(
                    map(data=>{
                        const category = data.data.category.addCategory;
                        return addCategory(category);
                    })
                );
        })
    )
}

const deleteCategoryEpic = action$ => {
    return action$.pipe(
        filter(deleteCategoryApiRequest.match),
        mergeMap((action)=>{
            return from(deleteCategoryMutation(action.payload))
                .pipe(
                    map(data=>{
                        const id = data.data.category.deleteCategory;
                        return deleteCategory(id);
                    })
                );
        })
    )
}

const categoryEpic = combineEpics(getAllCategoryEpic, addCategoryEpic, deleteCategoryEpic);

export default categoryEpic;