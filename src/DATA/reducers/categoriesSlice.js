import { createSlice, createAction} from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        categories:[{
            id: 0,
            category: "Home",
        }]
    },

    reducers: {
        loadAllCategory (state, action) {
            state.categories = action.payload;
            return state;
        },

        addCategory (state, action){
            state.categories.push(action.payload);
        },

        deleteCategory (state, action){
            const id = action.payload;
            const index = state.categories.findIndex(el => el.id === id);
            state.categories.splice(index,1);
        },
    }
})

export const { loadAllCategory, addCategory, deleteCategory } = categoriesSlice.actions;

export const getAllCategoryApiRequest = createAction('category/getAllCategory/api/request');
export const addCategoryApiRequest = createAction('category/addCategory/api/request');
export const deleteCategoryApiRequest = createAction('category/deleteCategory/api/request');

export default categoriesSlice.reducer;